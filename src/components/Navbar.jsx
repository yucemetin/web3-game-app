import React, { useRef, useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"
import ReactFlagsSelect from "react-flags-select";
import { useTranslation } from 'react-i18next'
import { useDispatch } from "react-redux"
import { setCurrentLanguage } from '../redux/language'
import gsap from 'gsap';

export default function Navbar() {

    const [sticky, setSticky] = useState(false)
    const unActiveClassName = `text-[#C2C5CE] font-bold text-xl hover:text-white transition-colors duration-700`
    const activeClassName = "text-white font-bold text-xl border-b border-white transition-colors duration-700"


    const dispatch = useDispatch()

    const { t } = useTranslation();

    const timeline = gsap.timeline({
        repeat: false,
        defaults: { duration: 2, ease: "easeInOut" }
    })

    const r2 = useRef()

    useEffect(() => {

        timeline.from(r2.current, { y: "-100%", }).to(r2.current, { y: "0%" })
        // eslint-disable-next-line
    }, [])

    const handleChange = code => {
        dispatch(setCurrentLanguage(code.toLowerCase()))

        const lang = code.toLowerCase() === 'us' ? 'en' : 'tr'

        let loc = "http://localhost:3005/";
        window.location.replace(loc + "?lng=" + lang);
    }

    window.onscroll = function (e) {
        setSticky(true)

        if (window.pageYOffset === 0) {
            setSticky(false)
        }
    }


    return (
        <nav ref={r2} className={sticky === true ? 'fixed top-0 z-50 w-full bg-black bg-opacity-90 transition-colors duration-700' : `fixed top-0 z-50  w-full transition-colors duration-700`}>
            <ul className='flex justify-between px-8 py-4 gap-x-32 items-center'>
                <li>
                    <NavLink to="/">
                        <p className={`logo-white text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ff00ed] hover:scale-[1.06] transition-all duration-300`}>Thirdgame</p>
                    </NavLink>
                </li>
                <li>
                    <nav>
                        <ul className='flex gap-x-20'>
                            <li className='transition-all duration-300'>
                                <NavLink to="/games" className={({ isActive }) =>
                                    isActive ? activeClassName : unActiveClassName
                                }>
                                    {t('nav1')}
                                </NavLink>
                            </li>
                            <li className='transition-all duration-300'>
                                <NavLink to="/about" className={({ isActive }) =>
                                    isActive ? activeClassName : unActiveClassName
                                }>
                                    {t('nav2')}
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </li>
                <li>
                    <nav>
                        <ul className='flex items-center gap-x-10'>
                            <li>
                                <ReactFlagsSelect
                                    countries={["US", "TR"]}
                                    selected={localStorage?.getItem("lang")?.toUpperCase() ?? 'TR'}
                                    customLabels={{ US: "EN", TR: "TR" }}
                                    onSelect={code => handleChange(code)}
                                    className="border-none"
                                />
                            </li>
                            <li>
                                <NavLink to="/user">
                                    <div className="p-1 rounded-2xl bg-gradient-to-r from-[#330be4] to-[#D325C7] group border-[0.5px] border-white border-opacity-0 hover:border-opacity-100">
                                        <button className={` ${sticky ? 'bg-white text-[#D325C7] group-hover:text-white' : 'text-white bg-black'} font-bold  px-6 py-3 rounded-xl  group-hover:bg-transparent transition-colors duration-300`}>{t('connect')}</button>
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </li>
            </ul>
        </nav>

    )
}
