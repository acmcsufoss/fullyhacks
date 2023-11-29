import LandingPage from '@/components/LandingPage/LandingPage'
import axios from 'axios'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Cache-Control', 'public, s-maxage=31536000')
  const company = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/companies`)
  const team = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/team`)
  const faq = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/faqs`)
  const [companyData, teamData, faqData] = await Promise.all([
    company,
    team,
    faq
  ])
  return {
    props: {
      companyData: companyData.data,
      teamData: teamData.data,
      faqData: faqData.data
    }
  }
}

export default function Home({
  companyData,
  teamData,
  faqData
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>FullyHacks 2023</title>
        <meta
          name="description"
          content="Welcome to FullyHacks 2023"
          key="desc"
        />
        <meta property="og:title" content="FullyHacks 2023" />
        <meta
          property="og:description"
          content="Welcome to FullyHacks 2023, CSUF's largest 24-hour hackathon"
        />
        <meta property="og:image" content="/fullyhacks_logo.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <LandingPage
        companyData={companyData}
        faqData={faqData}
        teamData={teamData}
      />
    </>
  )
}
