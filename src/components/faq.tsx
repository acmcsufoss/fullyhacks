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

  // Text shadow is somewhat accurate to the actual design in Figma. It's kinda hard to perfectly match it
  const mintColorRgba = "rgba(81, 255, 206, 0.2)";

  return (
    <div>
      <a
        className="block rounded-full border-2 border-white"
        onClick={toggleOpen}>
        <input type="checkbox" className={mounted ? "hidden" : ""} />
        <div className="rounded-box flex w-full items-center justify-between p-2 px-4 md:px-6 text-sm text-mint transition-all duration-500 ease-in-out hover:duration-200 hover:ease-in-out md:p-4 md:text-md lg:text-lg">
          <p
            className="text-start text-[1rem] normal-case leading-9 md:text-md lg:text-lg"
            style={{ textShadow: `0px 4px 4px ${mintColorRgba}` }}>
            {question}
          </p>
        </div>
      </a>
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          opened ? "max-h-screen" : "max-h-0"
        }`}>
        <p className="md:text-2xl/[28px] my-4 px-4 text-white md:px-8">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC<FAQProps> = (props) => {
  const { faqs } = props;
  return (
    <>
      <p className="mb-4 mt-14 text-xxl font-normal text-white md:text-[5rem]">
        FAQ
      </p>
      <div className="flex flex-col items-center">
        {faqs.map((faq: FAQType) => {
          return (
            <div key={faq.id} className="my-4 w-full">
              <FAQDropDown question={faq.question} answer={faq.answer} />
            </div>
          );
        })}
      </div>
      <p className="mt-16 text-center">
        More questions? Reach out to us at
        <a href="mailto:fullyhacks@gmail.com">
          &nbsp;
          <span className="underline">fullyhacks@gmail.com</span>
          &nbsp;
        </a>
        and we&apos;ll get back to you ASAP!
      </p>
    </>
  );
};

export default FAQ;
