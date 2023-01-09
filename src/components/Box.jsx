import React from 'react'

export default function Box({ value, onClick, disable }) {
    return (
        <button disabled={disable} onClick={onClick} className={`disabled:bg-red-400 w-[180px] h-[180px] bg-white select-none shadow-2xl bg-opacity-70 hover:bg-opacity-100 transition-colors duration-[1500ms] p-4 rounded-lg font-extrabold text-8xl boxes ${value === 'x' ? 'text-[#330be4]' : 'text-[#D325C7]'}`}>{value.toUpperCase()}</button>
    )
}
