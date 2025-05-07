import { faqs } from "@/lib/data/faq";
import { FAQType } from "@/types/interface";
import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

export function FAQDropDown({
  question,
  answer
}: {
  question: string;
  answer: string;
}) {
  const [opened, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleOpen = () => {
    setOpen(!opened);
  };

  return (
    <div
      className={`collapse z-20 border-2 border-white bg-[#201c33] bg-opacity-50 backdrop-blur-sm ${opened ? "rounded-box" : "rounded-full delay-150"}`}
      onClick={toggleOpen}>
      <input type="checkbox" className={mounted ? "hidden" : ""} />
      <div className="collapse-title flex w-full items-center justify-between rounded-b-none p-2 px-4 text-mint transition-all ease-in-out hover:bg-white/10 hover:duration-200 hover:ease-in-out md:p-4 md:px-6">
        <p
          className="text-start normal-case md:text-md"
          style={{ textShadow: `0px 4px 4px mint` }}>
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
        className={`collapse-content w-full overflow-hidden border-solid border-white bg-opacity-80 backdrop-blur-sm transition-[max-height] ease-in-out ${
          opened ? "max-h-screen border-t-2" : "max-h-0"
        }`}>
        <p className="my-4 px-6 text-white md:px-8 md:text-md">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      <p className="custom-text-shadow mb-4 text-xxl font-normal text-white md:text-[5rem]">
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
      <div className="relative mt-16">
        <div className="absolute inset-0 z-10 hidden h-8 rounded-md bg-purple_shadow_blur opacity-70 blur-2xl md:block"></div>
        <p className="relative z-10 text-left text-md tracking-wide md:text-center">
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
}
