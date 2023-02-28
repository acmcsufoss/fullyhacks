import CountDown from '@/components/CountDown/CountDown'

export default function Home() {
  return (
    <main className="flex flex-col items-center font-rubik font-semibold">
      <section className="mt-12 flex flex-col items-center text-center text-purple_main">
        <h1 className="text-xxl">
          FullyHacks <span className="text-orange_300">2023</span>
        </h1>
        <p className="font-normal text-lg">April 8th - 9th</p>
      </section>
      <CountDown />
      <div className="flex items-center mt-12 gap-8 text-md font-medium">
        <button className="bg-sky_300 text-white px-6 py-1 rounded-lg">
          Apply
        </button>
        <button className="font-normal"> Sponsor Us!</button>
      </div>
    </main>
  )
}
