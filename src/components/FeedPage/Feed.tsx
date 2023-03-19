import { feedUsers, User } from '@/types/interface'
import React, { useState } from 'react'
import { FeedSideBar } from '../NavBar/NavBar'
import Events from './Events'
import MainFeed from './MainFeed'
import Profile from './Profile'
interface FeedProps {
  feedUsers: feedUsers[]
  currentUser: User
}
const Feed: React.FC<FeedProps> = (props) => {
  const { feedUsers, currentUser } = props
  const [currentLocation, setLocation] = useState('Home')
  return (
    <section className="flex w-full">
      <FeedSideBar setLocation={setLocation} />
      {currentLocation == 'Home' ? (
        <MainFeed feedUsers={feedUsers} currentUser={currentUser} />
      ) : currentLocation == 'Events' ? (
        <Events />
      ) : currentLocation == 'Profile' ? (
        <Profile />
      ) : (
        <></>
      )}
    </section>
  )
}

export default Feed
