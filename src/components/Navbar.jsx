import React, { useRef, useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"
import ReactFlagsSelect from "react-flags-select";
import { useDispatch, useSelector } from "react-redux"
import { setCurrentLanguage } from '../redux/language'
import { setMenu } from '../redux/burgermodal'
import gsap from 'gsap';
import languages from "../language.json"
import Menu from './Menu';
import { setTheme } from '../redux/theme'
import { setAccount } from '../redux/tictactoeGame'


export default function Navbar() {

    const [sticky, setSticky] = useState(false)
    const unActiveClassName = `text-[#C2C5CE] font-bold text-xl hover:text-white transition-colors duration-700`
    const activeClassName = "text-white font-bold text-xl border-b border-white transition-colors duration-700"

    const { currentLanguage } = useSelector(state => state.animation)
    const { theme } = useSelector(state => state.theme)
    const { account } = useSelector(state => state.game)

    const dispatch = useDispatch()

    const timeline = gsap.timeline({
        repeat: false,
        defaults: { duration: 1, ease: "easeInOut" }
    })

    const r2 = useRef()

    useEffect(() => {
        timeline.from(r2.current, { y: "-100%", }).to(r2.current, { y: "0%" })
        // eslint-disable-next-line
    }, [])

    const handleChange = code => {

        const lang = code.toLowerCase() === 'us' ? 'en' : 'tr'
        dispatch(setCurrentLanguage(lang))
    }

    window.onscroll = function (e) {
        setSticky(true)

        if (window.pageYOffset === 0) {
            setSticky(false)
        }
    }

    const menuHandle = () => {
        dispatch(setMenu(true))
    }

    const themeHandle = () => {
        dispatch(setTheme(!theme))
    }

    const connectAccount = async () => {
        const { ethereum } = window

        const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
        dispatch(setAccount(accounts[0]))
    }

    return (
        <nav ref={r2} className={sticky === true ? `fixed top-0 z-50 w-full border-b-[0.5px] border-white/40 ${theme ? 'bg-gradient-to-r from-[#D325C7] to-[#330be4]' : 'bg-black'}  transition-all duration-700` : `fixed top-0 z-50 w-full bg-transparent transition-all duration-700`}>
            <ul className='flex justify-between px-8 py-4 gap-x-16 sma:gap-x-24 xmed:gap-x-32 items-center'>
                <li>
                    <NavLink to="/">
                        <p className={`logo-white text-3xl sma:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ff00ed] hover:scale-[1.06] transition-all duration-300`}>Thirdgame</p>
                    </NavLink>
                </li>
                <li className="hidden xsma:block">
                    <nav>
                        <ul className='flex gap-x-20'>
                            <li className='transition-all duration-300 text-base sma:text-xl'>
                                <NavLink to="/games" className={({ isActive }) =>
                                    isActive ? activeClassName : unActiveClassName
                                }>
                                    {languages[currentLanguage][0].nav1}
                                </NavLink>
                            </li>
                            <li className='transition-all duration-300 text-base sma:text-xl'>
                                <NavLink to="/faq" className={({ isActive }) =>
                                    isActive ? activeClassName : unActiveClassName
                                }>
                                    {languages[currentLanguage][0].nav2}
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </li>
                <li className="hidden xsma:inline-block">
                    <nav>
                        <ul className='flex items-center gap-x-10'>
                            <li className="flex justify-center items-center gap-x-1">
                                {theme && (
                                    <div className="w-10 h-10">
                                        <button onClick={themeHandle} className="w-full h-full"><img src="/sun.svg" alt="" /></button>
                                    </div>
                                )}

                                {!theme && (
                                    <div className="w-10 h-10">
                                        <button onClick={themeHandle} className="w-full h-full"><img src="/moon.svg" alt="" /></button>
                                    </div>
                                )}

                            </li>
                            <li>
                                <ReactFlagsSelect
                                    countries={["US", "TR"]}
                                    selected={localStorage?.getItem("lang")?.toUpperCase() === 'EN' ? 'US' : localStorage?.getItem("lang")?.toUpperCase() ?? 'US'}
                                    customLabels={{ US: "EN", TR: "TR" }}
                                    onSelect={code => handleChange(code)}
                                    className="border-none"
                                />
                            </li>
                            <li>
                                {account !== '' && (
                                    <button>
                                        <div className="p-1 rounded-2xl bg-gradient-to-r from-[#330be4] to-[#D325C7] group border-[0.5px] border-white border-opacity-0 hover:border-opacity-100">
                                            <p className={`text-white whitespace-nowrap bg-black text-xs xsma:text-sm sma:text-base font-bold px-4 xmed:px-6 py-3 rounded-xl group-hover:bg-transparent transition-colors duration-300`}>{account.replace(account.substring(6, 38), '...')}</p>
                                        </div>
                                    </button>

                                )}
                                {account === '' && (
                                    <div className="p-1 rounded-2xl bg-gradient-to-r from-[#330be4] to-[#D325C7] group border-[0.5px] border-white border-opacity-0 hover:border-opacity-100">
                                        <button onClick={connectAccount} className={`text-white whitespace-nowrap bg-black text-xs xsma:text-sm sma:text-base font-bold px-4 xmed:px-6 py-3 rounded-xl group-hover:bg-transparent transition-colors duration-300`}>{languages[currentLanguage][0].connectWallet}</button>
                                    </div>
                                )}

                            </li>
                        </ul>
                    </nav>
                </li>
                <li className="xsma:hidden flex items-center">
                    <button onClick={menuHandle} ><img className="w-[36px] h-[36px]" src="/menu.svg" alt="" /></button>
                </li>
            </ul>
            <Menu />
        </nav>
    )
}
