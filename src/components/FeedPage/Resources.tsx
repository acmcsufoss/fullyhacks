import { sponsorGiftType } from '@/types/interface'
import React from 'react'

const balsamiqAccess = (
  <p>
    Follow instruction on
    <a
      target={'_blank'}
      className="font-bold"
      href="https://balsamiq.com/wireframes/cloud/sales/promo/">
      {' '}
      this website{' '}
    </a>
    and enter promo code: <span className="font-bold"> BQRFHMA040823 </span>
  </p>
)
const digitalOceanAccess = (
  <div className="">
    <p>
      $50, 30-day free trial for all attendees using
      <a
        target={'_blank'}
        className="font-semibold"
        href="https://try.digitalocean.com/student-developers/?source=student_hackathon&utm_medium=events&utm_campaign=DevRel_Student_Hackathons">
        {' this link'}
      </a>
    </p>
  </div>
)
const xyzAccess = (
  <div>
    <p>Search and register a .xyz domain </p>
    <a className="font-bold" target={'_blank'} href="https://gen.xyz/register">
      on this website
    </a>
    <p>
      During checkout, apply the promo code:{' '}
      <span className="font-bold">FHK23</span> to get it at 0.00$
    </p>
  </div>
)
const echo3DAccess = (
  <a
    className="font-semibold"
    target={'_blank'}
    href="https://console.echo3d.com/#/auth/register-promo?code=April2023echo572">
    Register here
  </a>
)
const sponsorGifts: sponsorGiftType[] = [
  {
    id: 'gift1',
    company: 'Wolfram',
    content:
      'Access to Wolfram|One for all participants for 30 days! Wolfram|One includes both Desktop and Cloud, Wolfram Language, Knowledgebase, FreeCDF deployment, 5000 Wolfram|Alpha API calls, 5000 Cloud Credits, 2 installations per user, and 2 GB of Cloud Storage for 30 days.',
    access: 'You will receive an email 36-48 hours before the hackathon'
  },
  {
    id: 'gift2',
    company: 'Balsamiq',
    content:
      '90-day extended trial promo code for Balsamiq Cloud so you can do collaborative design on the browser',
    access: balsamiqAccess
  },
  {
    id: 'gift7',
    company: 'Digital Ocean',
    content:
      "DigitalOcean provides virtual servers (also known as VPS or droplets) that you can rent to run your website or application. These servers are hosted in the cloud, so you don't need to worry about managing physical hardware. You can choose from different server configurations to fit your needs, and DigitalOcean makes it easy to manage your servers through a user-friendly web interface. They also offer additional services like cloud storage and load balancing to help you build and scale your infrastructure.",
    access: digitalOceanAccess
  },
  {
    id: 'gift3',
    company: '.XYZ',
    content: 'Free .xyz domains for 1st year',
    access: xyzAccess
  },
  {
    id: 'gift4',
    company: 'echo3D',
    content:
      'echo3D is a cloud platform for 3D asset management that provides tools and cloud infrastructure to help developers quickly build and deploy 3D/AR/VR games, apps, and content. Participants will get 1-month FREE ACCESS to their premium plan of the echo3D platform ($99 value)',
    access: echo3DAccess
  },
  {
    id: 'gift5',
    company: 'Prisma',
    content: 'Free Prisma stickers',
    access: 'Grab it during event'
  },
  {
    id: 'gift6',
    company: 'Celsius',
    content: 'Free Celsius drinks',
    access: 'Grab it during event'
  }
]

const Resources = () => {
  return (
    <section className="mt-14 mx-10 w-full text-white">
      <div className="feed-title">Fully Gifts</div>
      <div className="font-light md:text-md">
        Cool gifts from our great sponsors
      </div>
      <div className="my-10 justify-center grid lg:grid-cols-3 gap-8">
        {sponsorGifts.map((gift: sponsorGiftType) => {
          return (
            <div
              key={gift.id}
              className="p-4 md:p-6 rounded-xl bg-purple_card bg-opacity-30 hover:bg-opacity-100 transition">
              <p className="font-bold text-lg">{gift.company}</p>
              <p>{gift.content}</p>
              <p className="my-2 text-md font-semibold">How to access:</p>
              <div>{gift.access}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Resources
