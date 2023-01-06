import React, { useRef, useEffect } from 'react'
import { NavLink } from "react-router-dom"
import gsap from "gsap"

export default function Navbar() {

    const timeline = gsap.timeline({
        repeat: false,
        defaults: { duration: 1, ease: "easeInOut" }
    })

    const r2 = useRef()

    useEffect(() => {

        timeline.from(r2.current, { y: "-100%", }).to(r2.current, { y: "0%" })
        // eslint-disable-next-line
    }, [])


    return (
        <nav ref={r2}>
            <ul className='flex justify-between p-8 gap-x-32 items-end'>
                <li>
                    <NavLink to="/">
                        <p className='logo text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ff00ed] hover:scale-[1.06] transition-all duration-300'>Thirdgame</p>
                    </NavLink>
                </li>
                <li className='mr-auto'>
                    <NavLink to="/games">
                        <p className='text-[#C2C5CE] font-bold text-xl hover:text-white'>Games</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/user">
                        <div className="p-1 rounded-2xl bg-gradient-to-r from-[#2E67DC] to-[#D325C7] group border-[0.5px] border-white border-opacity-0 hover:border-opacity-100">
                            <button className="font-bold text-white px-6 py-3 rounded-xl bg-black group-hover:bg-gradient-to-r group-hover:from-[#2E67DC] group-hover:to-[#D325C7] transition-colors duration-1000">Connect to Wallet</button>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </nav>

    )
}
