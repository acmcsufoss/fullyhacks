"use client";

import { FAQType } from "@/types/interface";
import { FAQDropDown } from "@/components/faq";
import links from "@/lib/data/links.json";

const faqs: FAQType[] = [
  {
    id: "faq0",
    question: "When should I arrive?",
    answer:
      "The check-in will start from 1pm to 3pm on Feb 24th in Mihaylo room 1502."
  },
  {
    id: "faq1/2",
    question: "When will the hackathon start?",
    answer:
      "The hackathon will officially start at 4pm Feb 24th. After the opening ceremony, we'll go back to CS buildings"
  },
  {
    id: "faq01",
    question: "When will the hackathon end?",
    answer:
      "The hackathon ends at 4pm Feb 25th, closing ceremony will be at 6pm."
  },
  {
    id: "faq17",
    question: "Can I leave during the hackathon?",
    answer:
      "Yes, you can leave then come back, make sure to check-in when you come back"
  },
  {
    id: "faq18",
    question: "Where is the information room?",
    answer:
      "Information room is in CS110A, you can come to check-in or ask questions"
  },
  {
    id: "faq02",
    question: "Where do I park my vehicles?",
    answer:
      "There is no charge for parking at CSUF on Saturday and Sunday, we'd recommend Lot A, Eastside for overnight parking."
  },
  {
    id: "faq03",
    question: "Will there be food?",
    answer:
      "We will have Pizza the first day for dinner and some Pastries and Fruit for breakfast Sunday. Snacks and drinks will be provided and be free to grab during the whole event. "
  },
  {
    id: "faq1",
    question: "Does FullyHacks have just one theme or multiple themes?",
    answer:
      "FullyHacks has multiple themes that are divided into four different tracks."
  },
  {
    id: "faq11",
    question: "What should I bring?",
    answer: "Sleeping bag, laptop, chargers, snacks & drinks, hygiene items,..."
  },
  {
    id: "faq12",
    question: "How do I prepare for the hackathon?",
    answer:
      "It would be a good idea to explore our Fullypacks template if you have no coding experience and have your coding enviroment setup beforehand, such as having version control (Github), an IDE (VSCode) and whatever necessary frameworks or runtimes your project needs (python, node, etc)."
  },
  {
    id: "faq13",
    question: "What are Fullypacks? Do I have to use them?",
    answer:
      "No, you're not required to use one to build your project. Fullypacks are our beginner-friendly templates to help you kickstart your project if you don't know where to start."
  },
  {
    id: "faq14",
    question: "How do teams work? What if I dont have a team?",
    answer:
      "Teams are size of 1-4. If you would like team up with others, we will have a team forming event after opening ceremony"
  },
  {
    id: "faq15",
    question: "What if I have questions during the hackathon?",
    answer:
      "Please reach out to any of the mentors in your room for questions or ask in our Discord forum channel."
  },
  {
    id: "faq16",
    question: "How will the projects be judged?",
    answer:
      'There are different prize categories that will be announced the day of the hackathon that you can sign up your project during the team forming event, for example "Best use of..."'
  }
];

export default function FAQ() {
  return (
    <div>
      <p className="feed-title">Frequently Asked Questions</p>
      <p className="md:text-md">
        Answering all your questions for FullyHacks 2024
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
