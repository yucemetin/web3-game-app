import React from 'react'
import GamesSlider from '../components/GamesSlider'

export default function Home() {
  return (
    <div className='flex flex-col gap-y-10 items-center justify-center h-full home relative'>
      <GamesSlider />
      <button className='border-[0.5px] border-white text-2xl font-extrabold text-white rounded-2xl bg-gradient-to-tr from-[#2E67DC] to-[#D325C7] hover:border-none hover:scale-[1.1] transition-all duration-600 px-6 py-3'>PLAY NOW</button>
      <h1 className='absolute top-1/2 -translate-y-1/2 font-extrabold text-[180px] break-all font-outline-2 text-black opacity-40'>THIRD GAME</h1>
      <h1 className='absolute bottom-1/2 -translate-y-1/2 font-extrabold text-[180px] break-all text-white opacity-40 font-outline'>THIRD GAME</h1>
    </div>

  )
}
