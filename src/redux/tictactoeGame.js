import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    account: '',
    metamaskModal: false,
    walletModal: false,
    betAmount: 0,
    settingModal: false,
    backdrop: false,
    board: Array(9).fill(""),
    active: 0,
    rpsmodal: true,
    rpschoose: "",
    payTransaction: JSON.parse(localStorage?.getItem("payTransaction") ?? [1]),
    prizeTransaction: JSON.parse(localStorage?.getItem("prizeTransaction") ?? [1])
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
        setBoard: (state, action) => {
            state.board = action.payload
        },
        setActive: (state, action) => {
            state.active = action.payload
        },
        setRpsModal: (state, action) => {
            state.rpsmodal = action.payload
        },
        setRpsChoose: (state, action) => {
            state.rpschoose = action.payload
        },
        setPayTransaction: (state, action) => {
            state.payTransaction = action.payload
            localStorage.setItem("payTransaction", JSON.stringify(state.payTransaction))
        },
        setPrizeTransaction: (state, action) => {
            state.prizeTransaction = action.payload
            localStorage.setItem("prizeTransaction", JSON.stringify(state.prizeTransaction))
        }
    },
})

export const { setAccount, setModal, setWalletModal, setAmount, setSettingModal, setBackdrop, setBoard, setActive, setRpsModal, setRpsChoose, setPayTransaction, setPrizeTransaction } = gameSlice.actions

export default gameSlice.reducer