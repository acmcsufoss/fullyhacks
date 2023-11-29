import { NavBarLanding } from '@/components/NavBar/NavBar'

const Hero: React.FC = () => {
  return (
    <>
      <NavBarLanding />
      <section className="mt-20 text-center text-purple_main z-[2]">
        <h1 className="relative text-xxl md:text-[6rem] font-ohm font-medium text-[#D7EEFF] [text-shadow:_0_0_10px_#719BCC]">
          FullyHacks{' '}
          <span className="text-turquoise_300 [text-shadow:_0_0_10px_#0BF4CA]">
            2024
          </span>
          <img
            src="/cat3.svg"
            className="w-[72px] md:w-[100px] absolute top-[-18%] md:top-[-20%] left-1/2"
          />
        </h1>
        <p className="font-normal text-[1rem] md:text-lg">
          TSU PAVILION: <time dateTime="2023-02-17">FEB 17</time> -{' '}
          <time dateTime="2023-02-18">FEB 18</time>
        </p>
      </section>
    </>
  )
}

export default Hero
