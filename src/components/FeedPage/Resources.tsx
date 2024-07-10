import { sponsorGiftType } from "@/types/interface";
import React from "react";

const balsamiqAccess = (
  <p>
    Follow instruction on
    <a
      target={"_blank"}
      className="font-bold"
      href="https://balsamiq.com/wireframes/cloud/sales/promo/">
      {" "}
      this website{" "}
    </a>
    and enter promo code: <span className="font-bold"> BQHACK60 </span>
  </p>
);

const echo3DAccess = (
  <a
    className="font-semibold"
    target={"_blank"}
    href="https://console.echo3d.com/#/auth/register-promo?code=Feb2024echo551">
    Register here
  </a>
);
const sponsorGifts: sponsorGiftType[] = [
  {
    id: "gift0",
    company: "StickerMule",
    content: "Free Fullyhacks stickers",
    access: "Grab it during event"
  },
  {
    id: "gift5",
    company: "StickerGiant",
    content: "Free Fullyhacks stickers",
    access: "Grab it during event"
  },
  {
    id: "gift1",
    company: "Wolfram",
    content:
      "Access to Wolfram|One for all participants for 30 days! Wolfram|One includes both Desktop and Cloud, Wolfram Language, Knowledgebase, FreeCDF deployment, 5000 Wolfram|Alpha API calls, 5000 Cloud Credits, 2 installations per user, and 2 GB of Cloud Storage for 30 days.",
    access: "You will receive an email 36-48 hours before the hackathon"
  },
  {
    id: "gift2",
    company: "Balsamiq",
    content:
      "60-day extended trial promo code for Balsamiq Cloud so you can do collaborative design on the browser",
    access: balsamiqAccess
  },
  {
    id: "gift4",
    company: "echo3D",
    content:
      "cho3D is a 3D asset management platform that enables developers to manage, update, and stream 3D content to real-time apps and games. For 1-month FREE access to our Pro tier",
    access: echo3DAccess
  }
];

const Resources = () => {
  return (
    <section className="mt-14 mr-8 w-full text-white">
      <div className="feed-title">Fully Gifts</div>
      <div className="md:text-md">Cool gifts from our great sponsors</div>

      <div className="my-10 justify-center grid lg:grid-cols-3 gap-8">
        {sponsorGifts.map((gift: sponsorGiftType, i) => {
          return (
            <div
              key={gift.id}
              className={`p-4 md:p-6 rounded-xl bg-purple_card ${
                i % 2 === 0 ? "bg-opacity-30" : ""
              }`}>
              <p className="font-bold text-lg">{gift.company}</p>
              <p>{gift.content}</p>
              <p className="my-2 text-md font-semibold">How to access:</p>
              <div>{gift.access}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Resources;
