import GamesSlider from '../components/GamesSlider'
import { useTranslation } from 'react-i18next'
import gsap from "gsap"
import React, { useEffect, useRef } from 'react'

export default function Home() {

  const { t } = useTranslation();

  const timeline = gsap.timeline({
    repeat: false,
    defaults: { duration: 5, ease: "easeInOut" }
  })

  const r1 = useRef()

  useEffect(() => {

    timeline.from(r1.current, { opacity: 0 }).to(r1.current, { opacity: 1 })
    // eslint-disable-next-line
  }, [])

  return (
    <div ref={r1} className={`flex flex-col gap-y-10 items-center justify-center h-full home relative`}>
      <GamesSlider />
      <button className='border-[0.5px] border-white text-2xl font-extrabold text-white rounded-2xl bg-gradient-to-tr from-[#2E67DC] to-[#D325C7] hover:border-none hover:scale-[1.1] transition-all duration-600 px-6 py-3'>{t('home-button')}</button>
      <h1 className='absolute top-1/2 -translate-y-1/2 font-extrabold text-[180px] break-all font-outline-2 text-black opacity-40'>THIRD GAME</h1>
      <h1 className='absolute bottom-1/2 -translate-y-1/2 font-extrabold text-[180px] break-all text-white opacity-40 font-outline'>THIRD GAME</h1>
    </div>

  )
}
