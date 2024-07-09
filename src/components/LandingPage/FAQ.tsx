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
      className="border-2 collapse border-pink_200 rounded-box"
      onClick={toggleOpen}>
      <input type="checkbox" className={mounted ? "hidden" : ""} />
      <div className="flex items-center justify-between text-sm md:text-md lg:text-lg p-2 px-4 md:p-4 w-full text-white transition-all duration-500 ease-in-out bg-[#0C1B3A] bg-opacity-50 border-pink_200 rounded-b-none collapse-title hover:ease-in-out hover:duration-200 hover:bg-purple_hover hover:text-white rounded-box">
        <p className="leading-9 normal-case text-start text-[1rem] md:text-md lg:text-lg">
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
        className={`collapse-content overflow-hidden bg-[#0C1B3A] shadow-pink_200 shadow-lg border-pink_200 border-solid transition-[max-height] duration-500 w-full ease-in-out ${
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
      <img
        src="/cat3.svg"
        className="absolute z-10 w-28 top-[5.75rem] left-1 md:w-64 md:top-6 md:left-2"
      />
      <p className="mb-4 text-xxl text-[#B479FF] [text-shadow:_0_0_10px_#FFD8FD] font-medium font-ohm mt-14 md:text-[5rem]">
        FAQ
      </p>
      <div className="flex flex-col items-center">
        {faqs.map((faq: FAQType) => {
          return (
            <div key={faq.id} className="w-full my-4">
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
