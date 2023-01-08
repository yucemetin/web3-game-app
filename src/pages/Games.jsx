import React, { useState } from 'react'

export default function Games() {

  const [view, setView] = useState(false)

  const viewHandle = () => {
    setView(!view)
  }
  return (
    <div className='relative w-full h-full'>
      <h1 className='absolute text-8xl font-extrabold text-white opacity-30 left-1/2 -translate-x-1/2 select-none'>GAMES</h1>
      <h1 className='absolute text-4xl font-bold text-white left-1/2 -translate-x-1/2 top-14 select-none'>TOP GAMES</h1>
      <div className='grid gap-20 grid-cols-3 place-content-center pt-40 pb-10'>
        <div className='flex flex-col items-center border-2 gap-y-4 max-h-[400px] games'>
          <img src="/vader.jpg" alt="" className="object-cover w-full h-3/5 transition-all duration-500 rounded-t-lg" />
          <h1 className='font-extrabold text-2xl text-white'>GAME 1</h1>
          <button className='border-[0.5px] border-white font-bold text-white text-xl px-12 py-2 rounded-2xl bg-gradient-to-r from-[#2E67DC] to-[#D325C7] hover:border-none hover:scale-[1.1] transition-all duration-600'>PLAY</button>
        </div>
        <div className='flex flex-col items-center border-2 gap-y-4 max-h-[400px] games'>
          <img src="/monkey.webp" alt="" className="object-cover w-full h-3/5 transition-all duration-500 rounded-t-lg" />
          <h1 className='font-extrabold text-2xl text-white'>GAME 1</h1>
          <button className='border-[0.5px] border-white font-bold text-white text-xl px-12 py-2 rounded-2xl bg-gradient-to-r from-[#2E67DC] to-[#D325C7] hover:border-none hover:scale-[1.1] transition-all duration-600'>PLAY</button>
        </div>
        <div className='flex flex-col items-center border-2 gap-y-4 max-h-[400px] games'>
          <img src="/monkey1.webp" alt="" className="object-cover w-full h-3/5 transition-all duration-500 rounded-t-lg" />
          <h1 className='font-extrabold text-2xl text-white'>GAME 1</h1>
          <button className='border-[0.5px] border-white font-bold text-white text-xl px-12 py-2 rounded-2xl bg-gradient-to-r from-[#2E67DC] to-[#D325C7] hover:border-none hover:scale-[1.1] transition-all duration-600'>PLAY</button>
        </div>
        {view && (
          <>
            <div className='flex flex-col items-center border-2 gap-y-4 max-h-[400px] games'>
              <img src="/monkey2.jpeg" alt="" className="object-cover w-full h-3/5 transition-all duration-500 rounded-t-lg" />
              <h1 className='font-extrabold text-2xl text-white'>GAME 1</h1>
              <button className='border-[0.5px] border-white font-bold text-white text-xl px-12 py-2 rounded-2xl bg-gradient-to-r from-[#2E67DC] to-[#D325C7] hover:border-none hover:scale-[1.1] transition-all duration-600'>PLAY</button>
            </div>
            <div className='flex flex-col items-center border-2 gap-y-4 max-h-[400px] games'>
              <img src="/monkey3.avif" alt="" className="object-cover w-full h-3/5 transition-all duration-500 rounded-t-lg" />
              <h1 className='font-extrabold text-2xl text-white'>GAME 1</h1>
              <button className='border-[0.5px] border-white font-bold text-white text-xl px-12 py-2 rounded-2xl bg-gradient-to-r from-[#2E67DC] to-[#D325C7] hover:border-none hover:scale-[1.1] transition-all duration-600'>PLAY</button>
            </div>
          </>
        )}
      </div>
      {!view && (
        <div className='flex items-center justify-center'>
          <div className="p-1 rounded-2xl bg-gradient-to-r from-[#330be4] to-[#D325C7] group border-[0.5px] border-white border-opacity-0 hover:border-opacity-100">
            <button onClick={viewHandle} className="font-bold text-[#D325C7] px-6 py-3 rounded-xl bg-black group-hover:text-white group-hover:bg-transparent transition-colors duration-300">VIEW ALL</button>
          </div>
        </div>
      )}
      {view && (
        <div className='flex items-center justify-center pb-10'>
          <div className="p-1 rounded-2xl bg-gradient-to-r from-[#330be4] to-[#D325C7] group border-[0.5px] border-white border-opacity-0 hover:border-opacity-100">
            <button onClick={viewHandle} className="font-bold text-[#D325C7] px-6 py-3 rounded-xl bg-black group-hover:text-white group-hover:bg-transparent transition-colors duration-300">CLOSE</button>
          </div>
        </div>
      )}
    </div>
  )
}
