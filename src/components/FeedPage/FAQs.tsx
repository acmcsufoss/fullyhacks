import { FAQType } from '@/types/interface'
import React from 'react'
import { FAQDropDown } from '../LandingPage/FAQ/FAQ'
const faqs: FAQType[] = [
  {
    id: 'faq0',
    question: 'When should I arrive?',
    answer:
      'The check-in will start from 1pm to 3pm on April 8th in Mihaylo room 1502.'
  },
  {
    id: 'faq1/2',
    question: 'When will the hackathon start?',
    answer:
      "The hackathon will officially start at 4pm April 8th. After the opening ceremony, we'll go back to CS buildings"
  },
  {
    id: 'faq01',
    question: 'When will the hackathon end?',
    answer:
      'The hackathon ends at 4pm April 9th, closing ceremony will be at 5:30pm.'
  },
  {
    id: 'faq02',
    question: 'Where do I park my vehicles?',
    answer:
      "There is no charge for parking at CSUF on Saturday and Sunday, we'd recommend Lot A for overnight parking."
  },
  {
    id: 'faq03',
    question: 'Will there be food?',
    answer:
      'We will have Pizza the first day for dinner and some Pastries and Fruit for breakfast Sunday. Snacks and drinks will be provided and be free to grab during the whole event. '
  },
  {
    id: 'faq1',
    question: 'Does Fullyhacks have just one theme or multiple themes?',
    answer:
      'Fullyhacks has multiple themes that are divided into four different tracks.'
  },
  {
    id: 'faq2',
    question: ' What are the four tracks that Fullyhacks offers?',
    answer:
      'Fullyhacks offers four tracks, including Education, Security, New Frontiers (AI/ML, Web3.0, Crypto, etc), and Environment.'
  },
  {
    id: 'faq11',
    question: 'What should I bring?',
    answer: 'Sleeping bag, laptop, chargers, snacks & drinks, hygiene items,...'
  },
  {
    id: 'faqctf',
    question: "What's CTF?",
    answer:
      "CTF stands for Capture The Flag. It's a type of cybersecurity competition where participants solve a series of challenges to find hidden 'flags.' These flags are strings of text that are usually hidden in the challenge's solution. We have CTF during Fullyhacks as an along side event, you're not required to participate but you'll get a small prize if you win"
  },
  {
    id: 'faq12',
    question: 'How do I prepare for the hackathon?',
    answer:
      'It would be a good idea to explore our Fullypacks template if you have no coding experience and have your coding enviroment setup beforehand, such as having version control (Github), an IDE (VSCode) and whatever necessary frameworks or runtimes your project needs (python, node, etc).'
  },
  {
    id: 'faq13',
    question: 'What are Fullypacks? Do I have to use them?',
    answer:
      "No, you're not required to use one to build your project. Fullypacks are our beginner-friendly templates to help you kickstart your project if you don't know where to start."
  },
  {
    id: 'faq14',
    question: 'How do teams work? What if I dont have a team?',
    answer:
      'Teams are size of 1-4. If you would like team up with others, we will have a team forming event at 4:00pm April 8th.'
  },
  {
    id: 'faq15',
    question: 'What if I have questions during the hackathon?',
    answer:
      'Please reach out to any of the mentors in your room for questions or ask in our Discord forum channel.'
  },
  {
    id: 'faq16',
    question: 'How will the projects be judged?',
    answer:
      'There are different prize categories that will be announced the day of the hackathon that you can sign up your project during the team forming event, for example "Best use of..."'
  }
]

const FAQs = () => {
  return (
    <section className="mt-14 mx-10 w-full text-purple_main">
      <p className="text-xl font-semibold">Frequently Asked Questions</p>
      <p className="font-light md:text-md">
        Answering all your questions for Fullyhacks 2023
      </p>
      <div className="flex flex-col items-center">
        {faqs.map((faq: FAQType) => {
          return (
            <div key={faq.id} className="w-full my-4">
              <FAQDropDown question={faq.question} answer={faq.answer} />
            </div>
          )
        })}
      </div>
      <p className="my-2 text-center">
        More questions? Reach out to us in
        <a
          target={'_blank'}
          href="https://discord.gg/XKNZxHEnJj"
          className="font-bold">
          {' our Discord server '}
        </a>
        and we&apos;ll get back to you ASAP!
      </p>
    </section>
  )
}

export default FAQs
