import { FAQType } from "@/types/interface";
import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface FAQProps {
  faqs: FAQType[];
}

interface FAQDropDownProps {
  question: string;
  answer: string;
}

export const FAQDropDown: React.FC<FAQDropDownProps> = (props) => {
  const { question, answer } = props;
  const [opened, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleOpen = () => {
    setOpen(!opened);
  };
  return (
    <a
      className="collapse rounded-full border-2 border-white"
      onClick={toggleOpen}>
      <input type="checkbox" className={mounted ? "hidden" : ""} />
      <div className="collapse-title rounded-box flex w-full items-center justify-between rounded-b-none border-white bg-[#0C1B3A] bg-opacity-50 p-2 px-4 text-sm text-mint transition-all duration-500 ease-in-out hover:duration-200 hover:ease-in-out md:p-4 md:text-md lg:text-lg">
        <p className="text-start text-[1rem] normal-case leading-9 md:text-md lg:text-lg">
          {question}
        </p>
        <div
          className={`transition-all duration-500 ${
            opened ? "rotate-180" : ""
          }`}>
          <FaChevronDown size={24} />
        </div>
      </div>
      <div
        className={`collapse-content w-full overflow-hidden border-solid border-white bg-[#0C1B3A] shadow-lg shadow-pink_200 transition-[max-height] duration-500 ease-in-out ${
          opened ? "max-h-screen border-t-2" : "max-h-0"
        }`}>
        <p className="my-4 text-white md:text-md">{answer}</p>
      </div>
    </a>
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
      <p className="mt-2 text-center">
        More questions? Reach out to us at
        <a href="mailto:fullyhacks@gmail.com" className="font-bold">
          {" fullyhacks@gmail.com "}
        </a>
        and we&apos;ll get back to you ASAP!
      </p>
    </>
  );
};

export default FAQ;
