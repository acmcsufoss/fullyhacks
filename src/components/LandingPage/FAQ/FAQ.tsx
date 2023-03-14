import { FAQType } from '@/types/interface'
import React from 'react'

interface FAQProps {
  faqs: FAQType[]
}

interface FAQDropDownProps {
  question: string
  answer: string
}

const FAQDropDown: React.FC<FAQDropDownProps> = (props) => {
  const { question, answer } = props
  return (
    <div
      tabIndex={0}
      className="w-[90vw] md:w-[60vw] collapse border border-base-300 bg-base-100 rounded-box">
      <input type="checkbox" />
      <div className="collapse-title w-full bg-purple_300 hover:ease-in-out hover:duration-200 hover:bg-purple_hover hover:text-white text-purple_main border-none">
        <p className="text-start leading-9 normal-case mr-auto text-md md:text-lg m-1">
          {question}
        </p>
      </div>
      <div className="collapse-content w-full bg-body_bg">
        <p className="mt-4">{answer}</p>
      </div>
    </div>
  )
}

const FAQ: React.FC<FAQProps> = (props) => {
  const { faqs } = props
  return (
    <>
      <p className="mt-14 text-xl font-medium md:text-xxl mb-4">
        Frequently Asked Questions
      </p>
      {faqs.map((faq: FAQType) => {
        return (
          <div key={faq.id} className="my-4">
            <FAQDropDown question={faq.question} answer={faq.answer} />
          </div>
        )
      })}
      <p className="mt-2 text-center">
        More questions? Reach out to us at
        <a href="mailto:fullyhacks@gmail.com" className="font-bold">
          {' fullyhacks@gmail.com '}
        </a>
        and we&apos;ll get back to you ASAP!
      </p>
    </>
  )
}

export default FAQ
