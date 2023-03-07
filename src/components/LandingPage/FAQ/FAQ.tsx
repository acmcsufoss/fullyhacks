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
    <div className="w-[90vw] md:w-[80vw] rounded-lg dropdown">
      <label
        tabIndex={0}
        className="w-full btn h-[5.5rem] bg-purple_300 hover:ease-in-out hover:duration-200 hover:bg-purple_hover hover:text-white text-purple_main border-none">
        <p className="text-start leading-9 normal-case mr-auto text-md md:text-lg m-1">
          {question}
        </p>
      </label>
      <ul
        tabIndex={0}
        className="w-full border-purple_300 border-4 dropdown-content bg-body_bg mt-4 menu p-2 shadow rounded-box">
        <li className="block">{answer}</li>
      </ul>
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
        <span className="font-bold"> info@fullyhacks.com </span> and we&apos;ll
        get back to you ASAP!
      </p>
    </>
  )
}

export default FAQ
