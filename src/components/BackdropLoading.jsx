import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from "react-redux"

export default function BackdropLoading() {

    const { backdrop } = useSelector(state => state.game)

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={backdrop}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}
