import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from "react-redux"
import { setMenu } from '../redux/burgermodal'
import { NavLink } from "react-router-dom"
import languages from "../language.json"
import { setCurrentLanguage } from '../redux/language'
import { setTheme } from '../redux/theme'
import { Switch } from '@headlessui/react'
import { Us, Tr } from "react-flags-select";
import { setAccount } from '../redux/tictactoeGame'

export default function Menuu() {

    const unActiveClassName = `hover:border hover:border-white hover:rounded-2xl hover:bg-white/20 text-[#C2C5CE] font-bold text-3xl hover:text-white py-2 px-12 w-full`
    const activeClassName = "text-white font-bold text-3xl border border-white rounded-2xl bg-white/20 py-2 px-12 w-full"

    const { currentLanguage } = useSelector(state => state.animation)
    const { theme } = useSelector(state => state.theme)

    const dispatch = useDispatch()
    const { isOpen } = useSelector(state => state.burgermenu)
    const { account } = useSelector(state => state.game)

    const closeHandle = () => {
        dispatch(setMenu(false))
    }

    const setEnglish = () => {
        dispatch(setCurrentLanguage('en'))
    }

    const setTurkish = () => {
        dispatch(setCurrentLanguage('tr'))
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
        <>
            <Offcanvas backdropClassName='bg-black' placement={'end'} show={isOpen} onHide={closeHandle}>
                <Offcanvas.Header className={`relative ${theme ? 'bg-gradient-to-r from-[#D325C7]/70 to-[#330be4]/70' : 'bg-black'} transition-all duration-700  w-full flex items-center justify-center`}>
                    <Offcanvas.Title><p className={`logo-white text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ff00ed] transition-all duration-300`}>Thirdgame</p></Offcanvas.Title>
                    <button onClick={closeHandle} className='absolute top-1/2 right-8 -translate-y-1/2 w-5 h-5'>
                        <img src="/close.svg" alt="" className=' fill-white ' />
                    </button>
                </Offcanvas.Header>
                <Offcanvas.Body className={`${theme ? 'bg-gradient-to-r from-[#D325C7]/70 to-[#330be4]/70' : 'bg-black'} transition-all duration-700`}>
                    <nav className='h-full pt-8'>
                        <ul className='h-full flex flex-col justify-between items-center gap-y-4'>
                            <li className='h-1/2'>
                                <nav className='items-center h-full'>
                                    <ul className='flex flex-col items-center gap-y-8 h-full'>
                                        <li className='transition-all duration-300 w-full flex items-center justify-center text-center h-[15%] '>
                                            <NavLink onClick={closeHandle} to="/games" className={({ isActive }) =>
                                                isActive ? activeClassName : unActiveClassName
                                            }>
                                                {languages[currentLanguage][0].nav1}
                                            </NavLink>
                                        </li>
                                        <li className='transition-all duration-300 flex items-center justify-center text-center h-[15%]'>
                                            <NavLink onClick={closeHandle} to="/faq" className={({ isActive }) =>
                                                isActive ? activeClassName : unActiveClassName
                                            }>
                                                {languages[currentLanguage][0].nav2}
                                            </NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </li>
                            <li>
                                {!account && (
                                    <button onClick={connectAccount} className="rainbow-button px-24 py-2 font-bold text-sm whitespace-nowrap border-2 border-[#D325C7]/40">
                                        {languages[currentLanguage][0].connectWallet}
                                    </button>
                                )}

                            </li>
                            <li className='w-full'>
                                <nav className='w-full'>
                                    <ul className='flex items-center gap-x-10 justify-between'>
                                        <li className="flex justify-center items-center gap-x-2">
                                            <button onClick={setEnglish}>
                                                <Us className='w-10 h-10' />
                                            </button>
                                            <button onClick={setTurkish}>
                                                <Tr className='w-10 h-10' />
                                            </button>
                                        </li>
                                        <li className="flex justify-center items-center gap-x-2">
                                            <div className="w-10 h-10">
                                                <img src="/moon.svg" alt="" />
                                            </div>
                                            <Switch
                                                checked={theme}
                                                onChange={themeHandle}
                                                className={`${theme ? 'bg-yellow-500' : 'bg-gray-700'
                                                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                                            >
                                                <span className="sr-only">Enable notifications</span>
                                                <span
                                                    className={`${theme ? 'translate-x-6' : 'translate-x-1'
                                                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                                />
                                            </Switch>
                                            <div className="w-10 h-10">
                                                <img src="/sun.svg" alt="" />
                                            </div>

                                        </li>
                                    </ul>
                                </nav>
                            </li>
                        </ul>
                    </nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}


/*
<ReactFlagsSelect
    countries={["US", "TR"]}
    selected={localStorage?.getItem("lang")?.toUpperCase() === 'EN' ? 'US' : localStorage?.getItem("lang")?.toUpperCase() ?? 'US'}
    customLabels={{ US: "EN", TR: "TR" }}
    onSelect={code => handleChange(code)}
    className="border-none"
/>
*/