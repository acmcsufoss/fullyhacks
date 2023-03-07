import { GenericNavBar } from '@/components/NavBar/NavBar'
import { GetServerSidePropsContext, NextPage } from 'next'
import { getSession, signOut } from 'next-auth/react'

const apply: NextPage = () => {
  return (
    <section>
      <GenericNavBar />
      <button onClick={() => signOut()}> Sign out</button>
    </section>
  )
}

export default apply
