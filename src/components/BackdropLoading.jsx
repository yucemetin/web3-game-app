import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from "react-redux"
import languages from "../language.json"

export default function BackdropLoading() {

    const { backdrop } = useSelector(state => state.game)
    const { currentLanguage } = useSelector(state => state.animation)

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={backdrop}
            className={"flex flex-col items-center text-center gap-y-2"}
        >
            <CircularProgress color="inherit" />
            <h1 className='font-bold text-3xl text-white'>{languages[currentLanguage][0].waiting}</h1>
        </Backdrop>
    )
}
