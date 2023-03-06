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

export const FooterBubbles: React.FC = () => {
  return (
    <>
      <Bubble
        top="animate-float"
        bottom="bottom-[10rem] md:bottom-[12rem]"
        left="left-[-4rem]"
        width="w-28 md:w-36"
        height="h-28 md:h-36"
        color="bg-orange_300"
      />
      <Bubble
        top="animate-float"
        bottom="bottom-[6rem] md:bottom-[12rem]"
        left="left-[4rem] md:left-[14rem]"
        width="w-28 md:w-52"
        height="h-28 md:h-52"
        color="bg-purple_300"
      />
      <Bubble
        top="animate-float"
        bottom="bottom-[-2rem] md:bottom-[-4rem]"
        left="left-[0rem]"
        width="w-32 md:w-64"
        height="h-32 md:h-64"
        color="bg-pink_100"
      />
      <Bubble
        top="animate-float"
        bottom="bottom-[2rem] md:bottom-[2rem]"
        left="left-[10rem] md:left-[24rem]"
        width="w-14 md:w-36"
        height="h-14 md:h-36"
        color="bg-sky_300"
      />
    </>
  )
}

export default Bubbles
