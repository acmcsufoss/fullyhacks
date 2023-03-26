import { FAQType } from '@/types/interface'
import React, { useState } from 'react'

interface FAQProps {
  faqs: FAQType[]
}

interface FAQDropDownProps {
  question: string
  answer: string
}

const FAQDropDown: React.FC<FAQDropDownProps> = (props) => {
  const { question, answer } = props
  let [opened, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!opened)
  }
  return (
    <a
      className="collapse border border-base-300 bg-base-100 rounded-box"
      onClick={toggleOpen}>
      <div
        className={`collapse-title w-full ${
          opened
            ? 'bg-purple_hover text-white'
            : 'bg-purple_300 text-purple_main'
        }  hover:ease-in-out hover:duration-200 hover:bg-purple_hover hover:text-white border-none rounded-box`}>
        <p className="text-start leading-9 normal-case mr-auto text-md md:text-lg m-1 select-none">
          {question}
        </p>
      </div>
      <div
        className={`collapse-content overflow-hidden transition-all duration-500 w-full bg-body_bg ease-in-out ${
          opened ? 'max-h-40 mb-4' : 'max-h-0'
        }`}>
        <p className="mt-4">{answer}</p>
      </div>
    </a>
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
          <div key={faq.id} className="w-full my-4">
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
