import { sponsorGiftType } from "@/types/interface";

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

export default function Resources() {
  return (
    <section className="mr-20 w-full max-w-3xl text-white">
      <div className="feed-title">Resources</div>
      <div className="custom-text-shadow border-b-2 border-[#72d6e6] pb-12 md:text-md">
        Tools to succeed beyond FullyHacks.
      </div>
      <div className="my-8 grid justify-center gap-12 lg:grid-cols-1">
        {sponsorGifts.map((gift: sponsorGiftType) => {
          return (
            <div
              key={gift.id}
              className={`rounded-xl bg-purple_card/50 p-4 md:p-6`}>
              <p className="text-lg font-bold">{gift.company}</p>
              <p>{gift.content}</p>
              <p className="my-2 text-md font-semibold">How to access:</p>
              <div>{gift.access}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
