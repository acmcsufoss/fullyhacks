import React from 'react'

export interface companyType {
  id: string
  name: string
  href: string
  image: string
}

export interface MenuType {
  id: string
  name: string
  href: string
  logo: string
  mobile: number
  desktop: number
}

export interface TeamType {
  id: string
  name: string
  image: string
  role: string
  href: string
}

export interface FAQType {
  id: string
  question: string
  answer: string
}

export interface ApplicationType {
  id: string
  name: string
  email: string
  major: string
  food: string
  github: string
  class: number
  phone: string
  degree: string
  pronouns: string
  approved: boolean
  rejected: boolean
  skillLevel: number
  submittedAt: Date
  updatedAt: Date
  userId: string
  applied: boolean
  status: string
  requirement: boolean
  response: string
}

export interface feedUsers {
  id: string
  name: string
  isAdmin: boolean
  discordId: string
  bio: string
  application: ApplicationType
}

export interface User {
  id: string
  name: string
  email: string
  discordId?: string
  bio?: string
  emailVerified?: Date
  image: string
  isAdmin: boolean
  application?: ApplicationType
}

export interface sponsorGiftType {
  id: string
  company: string
  content: string
  access: string | JSX.Element
}

export interface fullyPacksType {
  id: string
  name: string
  github: string
  description: string | JSX.Element
}
