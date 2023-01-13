import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    account: '',
    metamaskModal: false,
    walletModal: false,
    betAmount: 0,
    settingModal: false,
    backdrop: true,
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setAccount: (state, action) => {
            state.account = action.payload
        },
        setModal: (state, action) => {
            state.metamaskModal = action.payload
        },
        setWalletModal: (state, action) => {
            state.walletModal = action.payload
        },
        setAmount: (state, action) => {
            state.betAmount = action.payload
        },
        setSettingModal: (state, action) => {
            state.settingModal = action.payload
        },
        setBackdrop: (state, action) => {
            state.backdrop = action.payload
        },
    },
})

export const { setAccount, setModal, setWalletModal, setAmount, setSettingModal, setBackdrop } = gameSlice.actions

export default gameSlice.reducer