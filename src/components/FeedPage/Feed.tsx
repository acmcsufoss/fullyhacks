import { feedUsers } from '@/types/interface'
import React, { useState } from 'react'
import { FeedSideBar } from '../NavBar/NavBar'
import Events from './Events'
import MainFeed from './MainFeed'
interface FeedProps {
  feedUsers: feedUsers[]
}
const Feed: React.FC<FeedProps> = (props) => {
  const { feedUsers } = props
  const [currentLocation, setLocation] = useState('Home')
  return (
    <section className="flex w-full">
      <FeedSideBar setLocation={setLocation} />
      {currentLocation == 'Home' ? (
        <MainFeed feedUsers={feedUsers} />
      ) : currentLocation == 'Events' ? (
        <Events />
      ) : (
        <></>
      )}
    </section>
  )
}

export default Feed
