import React from 'react'
import Bubble from './Bubble'

const Bubbles = () => {
  return (
    <>
      <Bubble
        top="top-0"
        left="left-0"
        width="w-36"
        height="h-36"
        color="bg-orange_300"
      />
      <Bubble
        top="top-[16em] hidden md:block"
        left="left-48"
        width="w-36"
        height="h-36"
        color="bg-purple_300"
      />
      <Bubble
        top="top-[80px]"
        left="left-80"
        width="w-28"
        height="h-28"
        color="bg-purple_300"
      />
      <Bubble
        top="top-[24em]"
        left="left-0"
        width="w-28"
        height="h-28"
        color="bg-orange_300"
      />

      <Bubble
        top="top-0 hidden md:block"
        left="left-100"
        width="w-36"
        height="h-36"
        color="bg-orange_300"
      />
      <Bubble
        top="top-[16em] hidden md:block"
        left="left-100"
        right="right-48"
        width="w-36"
        height="h-36"
        color="bg-purple_300"
      />
      <Bubble
        top="top-[80px] hidden md:inline-block"
        left="left-100"
        right="right-80"
        width="w-28"
        height="h-28"
        color="bg-purple_300"
      />
      <Bubble
        top="top-[24em] hidden md:block"
        left="left-100"
        width="w-28"
        height="h-28"
        color="bg-orange_300"
      />
    </>
  )
}

export default Bubbles
