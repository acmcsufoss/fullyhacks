import LandingPage from '@/components/LandingPage/LandingPage'
import axios from 'axios'

async function getData() {
  const company = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/companies`)
  const team = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/team`)
  const faq = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/faqs`)
  const [companyData, teamData, faqData] = await Promise.all([
    company,
    team,
    faq
  ])
  return {
    companyData: companyData.data,
    teamData: teamData.data,
    faqData: faqData.data
  }
}

export default async function Home() {
  const { companyData, teamData, faqData } = await getData()
  return (
    <LandingPage
      companyData={companyData}
      teamData={teamData}
      faqData={faqData}
    />
  )
}