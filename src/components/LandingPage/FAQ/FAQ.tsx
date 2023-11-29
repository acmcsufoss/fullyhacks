import { FAQType } from '@/types/interface'
import React, { useEffect, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

interface FAQProps {
  faqs: FAQType[]
}

interface FAQDropDownProps {
  question: string
  answer: string
}

export const FAQDropDown: React.FC<FAQDropDownProps> = (props) => {
  const { question, answer } = props
  const [opened, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleOpen = () => {
    setOpen(!opened)
  }
  return (
    <a
      className="border collapse border-purple_hover rounded-box"
      onClick={toggleOpen}>
      <input type="checkbox" className={mounted ? 'hidden' : ''} />
      <div
        className={`flex justify-between items-center w-full text-white bg-transparent border-2 border-[#D936BF] collapse-title hover:ease-in-out hover:duration-200 hover:bg-purple_hover hover:text-white rounded-box transition-all duration-500 ease-in-out ${
          opened ? 'rounded-b-none' : ''
        }`}>
        <p className="leading-9 normal-case text-start text-md md:text-lg">
          {question}
        </p>
        <div
          className={`transition-all duration-500 ${
            opened ? 'rotate-180' : ''
          }`}>
          <FaChevronDown size={24} />
        </div>
      </div>
      <div
        className={`collapse-content overflow-hidden border-none shadow-[#D935BF] shadow-lg border-[#D936BF] transition-all duration-500 w-full bg-transparent ease-in-out ${
          opened ? 'max-h-screen' : 'max-h-0'
        }`}>
        <p className="my-4 text-white md:text-md">{answer}</p>
      </div>
    </a>
  )
}

const FAQ: React.FC<FAQProps> = (props) => {
  const { faqs } = props
  return (
    <>
      <img
        src="/cat3.svg"
        className="absolute z-10 w-32 top-6 left-3 md:w-64"
      />
      <p className="mb-4 text-xl text-[#FFD8FD] [text-shadow:_0_0_10px_#B479FF] font-medium font-ohm mt-14 md:text-[5rem]">
        FAQ
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
