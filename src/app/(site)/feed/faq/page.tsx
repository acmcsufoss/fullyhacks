"use client";

import { FAQType } from "@/types/interface";
import { FAQDropDown } from "./_components/faq";
import links from "@/lib/data/links.json";

const faqs: FAQType[] = [
  {
    id: "faq0",
    question: "When should I arrive?",
    answer:
      "Check-in will be from 1 PM to 3 PM on April 12th in Mihaylo Room 1502."
  },
  {
    id: "faq1",
    question: "When will the hackathon start?",
    answer:
      "The hackathon will officially start at 4 PM on April 12th. After the opening ceremony, we'll head back to the CS buildings."
  },
  {
    id: "faq2",
    question: "When will the hackathon end?",
    answer:
      "The hackathon ends at 4 PM on April 13th. The closing ceremony will be at 6 PM."
  },
  {
    id: "faq3",
    question: "Can I leave during the hackathon?",
    answer:
      "Yes, you can leave and return. Just make sure to check in when you come back."
  },
  {
    id: "faq4",
    question: "Where is the information room?",
    answer:
      "The information room is in CS110A. You can come here to check in or ask questions."
  },
  {
    id: "faq5",
    question: "Where do I park my vehicle?",
    answer:
      "Parking at CSUF is free on Saturday and Sunday. We recommend Lot A, Eastside, for overnight parking."
  },
  {
    id: "faq6",
    question: "Will there be food?",
    answer:
      "Yes! We will have pizza on the first day for dinner and pastries and fruit for breakfast on Sunday. Snacks and drinks will be available throughout the event."
  },
  {
    id: "faq7",
    question: "Does FullyHacks have one theme or multiple themes?",
    answer:
      "FullyHacks has multiple themes, divided into four different tracks."
  },
  {
    id: "faq8",
    question: "What should I bring?",
    answer:
      "A sleeping bag, laptop, chargers, snacks, drinks, hygiene items, and anything else you may need."
  },
  {
    id: "faq9",
    question: "How do I prepare for the hackathon?",
    answer:
      "If you have no coding experience, check out our FullyPacks template. Make sure your coding environment is set up in advance, including version control (GitHub), an IDE (VSCode), and any necessary frameworks or runtimes (Python, Node.js, etc.)."
  },
  {
    id: "faq10",
    question: "What are FullyPacks? Do I have to use them?",
    answer:
      "No, you're not required to use them. FullyPacks are beginner-friendly templates designed to help you start your project if you don't know where to begin."
  },
  {
    id: "faq11",
    question: "How do teams work? What if I don't have a team?",
    answer:
      "Teams can have 1 to 4 members. If you don't have a team, we will host a team-forming event after the opening ceremony."
  },
  {
    id: "faq12",
    question: "What if I have questions during the hackathon?",
    answer:
      "Please reach out to any of the mentors in your room or ask in our Discord forum channel."
  },
  {
    id: "faq13",
    question: "How will the projects be judged?",
    answer:
      "There will be different prize categories announced on the day of the hackathon. You can sign up your project for a category during the team-forming event. Examples include 'Best Use of...' awards."
  }
];

export default function FAQ() {
  return (
    <div>
      <p className="feed-title">Frequently Asked Questions</p>
      <p className="custom-text-shadow mt-4 font-audiowide text-white md:text-md">
        Answering all your questions for FullyHacks 2025
      </p>
      <div className="mt-4 flex flex-col items-center gap-4 md:gap-6">
        {faqs.map((faq: FAQType) => {
          return (
            <div key={faq.id} className="w-full">
              <FAQDropDown question={faq.question} answer={faq.answer} />
            </div>
          );
        })}
      </div>
      <p className="my-2 text-center">
        More questions? Reach out to us in
        <a target={"_blank"} href={links.discord} className="font-bold">
          {" our Discord server "}
        </a>
        and we&apos;ll get back to you ASAP!
      </p>
    </div>
  );
}
