import React from 'react'
import languages from "../language.json"
import { useSelector ,useDispatch} from "react-redux"
import MetamaskNotFound from "../components/MetamaskNotFound"
import WalletNotFound from "../components/ConnectWallet"
import { setModal } from '../redux/tictactoeGame'
import { setWalletModal } from '../redux/tictactoeGame'
import { setSettingModal } from '../redux/tictactoeGame'
import GameSetting from '../components/GameSetting';

export default function Games() {

  const { currentLanguage } = useSelector(state => state.animation)
  const { account } = useSelector(state => state.game)

  const dispatch = useDispatch()

  const playHandle = () => {
    const { ethereum } = window

    if (!ethereum) {
      dispatch(setModal(true))
      return
    }

    if(account === '') {
      dispatch(setWalletModal(true))
      return
    }
    
    dispatch(setSettingModal(true))

  }

  return (
    <div className='relative w-full h-full'>
      <h1 className='absolute text-6xl 3xsma:text-8xl font-extrabold text-white opacity-30 left-1/2 -translate-x-1/2 select-none'>GAMES</h1>
      <h1 className='absolute text-2xl 3xsma:text-4xl font-bold text-white left-1/2 -translate-x-1/2 top-14 select-none'>TOP GAMES</h1>
      <div className='grid gap-20 grid-cols-1 3xsma:grid-cols-2 xsma:grid-cols-3 place-content-center pt-40 pb-10'>
        <div className='flex flex-col items-center border-2 gap-y-4 max-h-[400px] games transition-all duration-500'>
          <img src="/tictactoe.jpeg" alt="" className="object-cover w-full h-3/5 transition-all duration-500" />
          <h1 className='font-extrabold text-2xl text-white'>TIC TAC TOE</h1>
          <button onClick={playHandle} className='border-[0.5px] border-white font-bold text-white text-xl px-12 py-2 rounded-2xl bg-gradient-to-r from-[#2E67DC] to-[#D325C7] hover:border-none hover:scale-[1.1] transition-all duration-600'>{languages[currentLanguage][0].gamesButton}</button>
        </div>
        <div className='relative flex flex-col items-center border-2 gap-y-4 max-h-[400px] games transition-all duration-500'>
          <img src="/rps.jpeg" alt="" className=" object-cover w-full h-3/5 transition-all duration-500 " />
          <h1 className='absolute text-red-600 text-3xl xxsma:text-3xl border-[2px] xsma:text-2xl xsma:border-[4px] sma:text-3xl med:text-4xl sma:border-[5px] med:border-[7px] p-4 border-red-600 -rotate-[20deg] top-16 font-bold med:font-extrabold opacity-70'>Coming Soon</h1>
          <h1 className='font-extrabold text-2xl text-white'>ROCK PAPER SCISSORS</h1>
          <button disabled className='disabled:opacity-50 border-[0.5px] border-white font-bold text-white text-xl px-12 py-2 rounded-2xl bg-gradient-to-r from-[#2E67DC] to-[#D325C7] hover:border-none hover:scale-[1.1] transition-all duration-600'>{languages[currentLanguage][0].gamesButton}</button>
        </div>
        <div className='relative flex flex-col items-center border-2 gap-y-4 max-h-[400px] games transition-all duration-500'>
          <img src="/game1.jpeg" alt="" className="object-cover w-full h-3/5 transition-all duration-500" />
          <h1 className='absolute text-red-600 text-3xl xxsma:text-3xl border-[2px] xsma:text-2xl xsma:border-[4px] sma:text-3xl med:text-4xl sma:border-[5px] med:border-[7px] p-4 border-red-600 -rotate-[20deg] top-16 font-bold med:font-extrabold opacity-70'>Coming Soon</h1>
          <h1 className='font-extrabold text-2xl text-white'>GUESS DICE</h1>
          <button disabled className='disabled:opacity-50 border-[0.5px] border-white font-bold text-white text-xl px-12 py-2 rounded-2xl bg-gradient-to-r from-[#2E67DC] to-[#D325C7] hover:border-none hover:scale-[1.1] transition-all duration-600'>{languages[currentLanguage][0].gamesButton}</button>
        </div>
        <div className='relative flex flex-col items-center border-2 gap-y-4 max-h-[400px] games transition-all duration-500'>
          <img src="/game2.jpeg" alt="" className="object-cover w-full h-3/5 transition-all duration-500 " />
          <h1 className='absolute text-red-600 text-3xl xxsma:text-3xl border-[2px] xsma:text-2xl xsma:border-[4px] sma:text-3xl med:text-4xl sma:border-[5px] med:border-[7px] p-4 border-red-600 -rotate-[20deg] top-16 font-bold med:font-extrabold opacity-70'>Coming Soon</h1>
          <h1 className='font-extrabold text-2xl text-white'>BACKGAMMON</h1>
          <button disabled className='disabled:opacity-50 border-[0.5px] border-white font-bold text-white text-xl px-12 py-2 rounded-2xl bg-gradient-to-r from-[#2E67DC] to-[#D325C7] hover:border-none hover:scale-[1.1] transition-all duration-600'>{languages[currentLanguage][0].gamesButton}</button>
        </div>
        <div className='relative flex flex-col items-center border-2 gap-y-4 max-h-[400px] games transition-all duration-500'>
          <img src="/game3.jpeg" alt="" className="object-cover w-full h-3/5 transition-all duration-500 " />
          <h1 className='absolute text-red-600 text-3xl xxsma:text-3xl border-[2px] xsma:text-2xl xsma:border-[4px] sma:text-3xl med:text-4xl sma:border-[5px] med:border-[7px] p-4 border-red-600 -rotate-[20deg] top-16 font-bold med:font-extrabold opacity-70'>Coming Soon</h1>
          <h1 className='font-extrabold text-2xl text-white'>HOCKEY</h1>
          <button disabled className='disabled:opacity-50 border-[0.5px] border-white font-bold text-white text-xl px-12 py-2 rounded-2xl bg-gradient-to-r from-[#2E67DC] to-[#D325C7] hover:border-none hover:scale-[1.1] transition-all duration-600'>{languages[currentLanguage][0].gamesButton}</button>
        </div>
      </div>
      <MetamaskNotFound/>
      <WalletNotFound/>
      <GameSetting/>
    </div >
  )
}
