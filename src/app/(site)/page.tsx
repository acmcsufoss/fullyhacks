import React from "react";
import LandingPage from "./_components/landing-page";
import axios from "axios";

export const dynamic = "force-dynamic";

async function getSiteData() {
  const company = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/companies`);
  const team = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/team`);
  const faq = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/faqs`);
  const [companyData, teamData, faqData] = await Promise.all([
    company,
    team,
    faq
  ]);
  return {
    companyData: companyData.data,
    teamData: teamData.data,
    faqData: faqData.data
  };
}

export default async function Home() {
  const { companyData, teamData, faqData } = await getSiteData();
  return (
    <LandingPage
      companyData={companyData}
      teamData={teamData}
      faqData={faqData}
    />
  );
}
