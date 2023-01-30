import GamesSlider from '../components/GamesSlider'
import gsap from "gsap"
import { useSelector, useDispatch } from "react-redux"
import React, { useEffect, useRef, useState } from 'react'
import languages from "../language.json"
import { setSettingModal } from '../redux/tictactoeGame'
import GameSetting from '../components/GameSetting'
import MetamaskNotFound from "../components/MetamaskNotFound"
import WalletNotFound from "../components/ConnectWallet"
import { setModal } from '../redux/tictactoeGame'
import { setWalletModal } from '../redux/tictactoeGame'

export default function Home() {

  const { active } = useSelector(state => state.game)
  const { currentLanguage } = useSelector(state => state.animation)
  const [slidesToShow, setSlidesToShow] = useState(3)
  const dispatch = useDispatch()
  const { account } = useSelector(state => state.game)


  const timeline = gsap.timeline({
    repeat: false,
    defaults: { duration: 5, ease: "easeInOut" }
  })

  const r1 = useRef()

  useEffect(() => {

    timeline.from(r1.current, { opacity: 0 }).to(r1.current, { opacity: 1 })
    // eslint-disable-next-line
  }, [])


  window.addEventListener("resize", () => {
    if (window.innerWidth < 960) {
      setSlidesToShow(1)
    }
    if (window.innerWidth > 960) {
      setSlidesToShow(3)
    }
  })

  useEffect(() => {
    if (window.innerWidth < 960) {
      setSlidesToShow(1)
    }
    if (window.innerWidth > 960) {
      setSlidesToShow(3)
    }
  }, [])

  const playHandle = () => {
    if (active === 0) {

      const { ethereum } = window

      if (!ethereum) {
        dispatch(setModal(true))
        return
      }

      if (account === '') {
        dispatch(setWalletModal(true))
        return
      }

      dispatch(setSettingModal(true))
    }
  }

  return (
    <div ref={r1} className={`flex flex-col gap-y-6 items-center justify-center h-full home relative`}>
      <GamesSlider slidesToShow={slidesToShow} />
      <button disabled={active !== 0} onClick={playHandle} className='disabled:opacity-50 border-[0.5px] border-white text-2xl font-extrabold text-white rounded-2xl bg-gradient-to-tr from-[#2E67DC] to-[#D325C7] hover:border-none hover:scale-[1.1] transition-all duration-600 px-6 py-2'>{languages[currentLanguage][0].homeButton}</button>
      <h1 className='absolute top-1/2 -translate-y-1/2 font-extrabold text-[50px] mb:text-[80px] xxsma:text-[100px] xsma:text-[130px] sma:text-[150px] smed:text-[180px] break-all font-outline-2 text-black opacity-40'>THIRD GAME</h1>
      <h1 className='absolute bottom-1/2 -translate-y-1/2 font-extrabold text-[50px] mb:text-[80px] xxsma:text-[100px] xsma:text-[130px] sma:text-[150px] smed:text-[180px] break-all text-white opacity-40 font-outline'>THIRD GAME</h1>
      <GameSetting />
      <MetamaskNotFound />
      <WalletNotFound />
    </div>

  )
}
