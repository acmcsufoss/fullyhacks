import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export function FAQDropDown({
  question,
  answer
}: {
  question: string;
  answer: string;
}) {
  const [opened, setOpened] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleFAQ = () => {
    setOpened(!opened);
  };

  return (
    <div
      className="rounded-box collapse z-20 border-2 border-[#6f71aa] bg-[#1A1C5C] bg-opacity-80 text-white backdrop-blur-sm"
      onClick={toggleFAQ}>
      <input type="checkbox" className={mounted ? "hidden" : ""} />
      <div
        className={`collapse-title flex w-full items-center justify-between rounded-b-none p-2 px-4 transition-all ease-in-out hover:bg-white/10 hover:duration-200 hover:ease-in-out md:p-5 ${opened ? "bg-white/10" : ""}`}>
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
        className={`collapse-content w-full overflow-hidden border-solid border-white bg-[#72D6E6] bg-opacity-50 backdrop-blur-sm transition-[max-height] ease-in-out ${
          opened ? "max-h-screen" : "max-h-0"
        }`}>
        <p className="my-4 px-6 text-white md:px-8 md:text-md">{answer}</p>
      </div>
    </div>
  );
}
