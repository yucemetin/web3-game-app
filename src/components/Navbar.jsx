import React from 'react'
import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <nav>
            <ul className='flex justify-between p-8 gap-x-32 items-center'>
                <li>
                    <NavLink to="/">
                        <p className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D325C7]'>Thirdgame</p>
                    </NavLink>
                </li>
                <li className='mr-auto'>
                    <NavLink to="/games">
                        <p className='text-[#C2C5CE] font-bold text-xl'>Games</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/user">
                        <div className="p-1 rounded-2xl bg-gradient-to-r from-[#2E67DC] to-[#D325C7] group">
                            <button className="font-bold text-white px-6 py-3 rounded-xl bg-black group-hover:bg-gradient-to-r group-hover:from-[#2E67DC] group-hover:to-[#D325C7] transition-all duration-1000">Connect to Wallet</button>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </nav>

    )
}
