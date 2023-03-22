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
const xyzAccess = (
  <p>
    <p>Search and register a .xyz domain </p>
    <a className="font-bold" target={'_blank'} href="https://gen.xyz/register">
      on this website
    </a>
    <p>
      During checkout, apply the promo code:{' '}
      <span className="font-bold">FHK23</span> to get it at 0.00$
    </p>
  </p>
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
      'Access to both Desktop and Cloud, Wolfram Language, Knowledgebase, FreeCDF deployment, 5000 Wolfram|Alpha API calls, 5000 Cloud Credits, 2 installations per user, and 2 GB of Cloud Storage for 30 days.',
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
    <section className="mt-14 mx-10 w-full text-purple_main">
      <p className="md:text-xl font-semibold">Fully Gifts</p>
      <p className="font-light md:text-md">
        Cool gifts from our great sponsors
      </p>
      <div className="my-10 justify-center grid md:grid-cols-3 gap-8">
        {sponsorGifts.map((gift: sponsorGiftType) => {
          return (
            <div key={gift.id} className="bg-sky-100 p-4 rounded-xl">
              <p className="font-bold text-lg">{gift.company}</p>
              <p>{gift.content}</p>
              <p className="my-2 text-md font-semibold">How to access:</p>
              <p>{gift.access}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Resources
