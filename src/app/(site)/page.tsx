import React from "react";
import LandingPage from "./_components/landing-page";
import { companies } from "@/lib/data/companies";
import { team } from "@/lib/data/team";
import { faqs } from "@/lib/data/faq";

export default function Home() {
  return <LandingPage companyData={companies} teamData={team} faqData={faqs} />;
}
