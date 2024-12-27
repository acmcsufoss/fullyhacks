import { FAQType } from "@/types/interface";
import React from "react";

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
  return (
    <>
      <div className="rounded-full border-2 border-white">
        <div className="rounded-box flex w-full items-center justify-between rounded-b-none border-white p-2 px-4 md:px-6 text-sm text-mint md:p-4 md:text-md lg:text-lg">
          <p className="text-start text-[1rem] normal-case leading-9 md:text-md lg:text-lg">
            {question}
          </p>
        </div>
      </div>
      <div className="px-4 md:px-8">
        <p className="my-4 text-white md:text-2xl/[28px] ">{answer}</p>
      </div>
    </>
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
