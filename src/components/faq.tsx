import { FAQType } from "@/types/interface";
import React, { useState, useEffect } from "react";
// import { FaChevronDown } from "react-icons/fa";

interface FAQProps {
  faqs: FAQType[];
}

interface FAQDropDownProps {
  question: string;
  answer: string;
}

export const FAQDropDown: React.FC<FAQDropDownProps> = ({
  question,
  answer
}) => {
  const [opened, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleOpen = () => {
    setOpen(!opened);
  };

  return (
    <div>
      <a
        className="block rounded-full border-5 border-white"
        onClick={toggleOpen}>
        <input type="checkbox" className={mounted ? "hidden" : ""} />
        <div className="rounded-box flex w-full items-center justify-between rounded-b-none p-2 px-4 text-sm text-mint transition-all duration-500 ease-in-out hover:duration-200 hover:ease-in-out md:p-6 md:px-6 md:text-md lg:text-lg">
          <p
            className="text-start text-md normal-case leading-9 md:text-[2.5rem]"
            style={{ textShadow: `0px 4px 4px mint` }}>
            {question}
          </p>
        </div>
      </a>
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          opened ? "max-h-screen" : "max-h-0"
        }`}>
        <p className="my-4 px-6 text-md md:text-[1.5rem] text-white md:px-8">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC<FAQProps> = (props) => {
  const { faqs } = props;
  return (
    <>
      <p className="mb-6 md:mb-24 mt-14 text-xxl font-normal text-white md:text-[5rem]">
        FAQ
      </p>
      <div className="flex flex-col items-center">
        {faqs.map((faq: FAQType) => {
          return (
            <div key={faq.id} className="my-5 md:my-12 w-full">
              <FAQDropDown question={faq.question} answer={faq.answer} />
            </div>
          );
        })}
      </div>
      <div className="relative mt-16">
        <div className="hidden md:block absolute inset-0 h-8 rounded-md bg-purple_shadow_blur opacity-70 blur-2xl"></div>
        <p className="relative text-left text-md tracking-wide md:text-center">
          More questions?&nbsp;
          {/* Add new line on mobile view */}
          <br className="md:hidden" />
          <br className="md:hidden" />
          Reach out to us at
          <a href="mailto:fullyhacks@gmail.com">
            &nbsp;
            <span className="underline">fullyhacks@gmail.com</span>
            &nbsp;
          </a>
          and we&apos;ll get back to you ASAP!
        </p>
      </div>{" "}
    </>
  );
};

export default FAQ;
