import LandingPage from '@/components/LandingPage/LandingPage'
import axios from 'axios'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  const company = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/companies`)
  const faq = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/faqs`)
  const [companyData, faqData] = await Promise.all([company, faq])
  return {
    props: {
      companyData: companyData.data,
      faqData: faqData.data
    }
  }
}

export default function Home({
  companyData,
  faqData
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main className="relative flex flex-col items-center font-rubik font-semibold">
      <LandingPage companyData={companyData} faqData={faqData} />
    </main>
  )
}
