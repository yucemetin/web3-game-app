import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { useSelector } from "react-redux"

export default function Confeti() {
    const { width, height } = useWindowSize()
    const { confeti } = useSelector(state => state.theme)
    
    return (
        <Confetti
            run={confeti}
            width={width}
            height={height}
            className={`${!confeti ? 'hidden': ''}`}
        />
    )
}
