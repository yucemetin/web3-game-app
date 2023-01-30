import React, { useEffect, useState } from 'react'
import io from "socket.io-client"
import Board from '../components/Board'
import LoseModal from '../components/LoseModal'
import WinModal from '../components/WinModal'
import DrawModal from '../components/DrawModal'
import { ethers } from "ethers"
import Lock from "../artifacts/contracts/Lock.sol/Lock.json"
import BackdropLoading from '../components/BackdropLoading'
import { setBackdrop } from '../redux/tictactoeGame'
import { useDispatch, useSelector } from "react-redux"
import GameSetting from '../components/GameSetting'
import { setBoard } from '../redux/tictactoeGame'
import { setPrizeTransaction } from '../redux/tictactoeGame'

let socket;

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

function TicTacToe() {

    const { account } = useSelector(state => state.game)
    const { board } = useSelector(state => state.game)

    async function revealWinner(account) {

        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, Lock.abi, signer)

        const transaction = await contract.revealWinner(account)
        await transaction.wait()
    }

    async function draww(account) {

        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, Lock.abi, signer)

        const transaction = await contract.draw(account)
        await transaction.wait()

        contract.on("TransactionPrize", (arr, event) => {
            let info = {
                arr: arr,
                data: event
            }

            let temp = [...info.arr]
            temp[temp.length - 1] = [...temp[temp.length - 1], Date.now(), 1]
            const newTemp = JSON.parse(localStorage.getItem("payTransaction")) === null ? [] : JSON.parse(localStorage.getItem("payTransaction"))

            newTemp.push(temp[temp.length - 1])

            dispatch(setPrizeTransaction(newTemp))
        })
    }

    async function collect(account1, account2) {

        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, Lock.abi, signer)

        const transaction = await contract.collect(account1, account2)
        await transaction.wait()

        contract.on("TransactionPrize", (arr, event) => {
            let info = {
                arr: arr,
                data: event
            }
            let temp = [...info.arr]
            temp[temp.length - 1] = [...temp[temp.length - 1], Date.now(), 0]
            const newTemp = JSON.parse(localStorage.getItem("payTransaction")) === null ? [] : JSON.parse(localStorage.getItem("payTransaction"))

            newTemp.push(temp[temp.length - 1])

            dispatch(setPrizeTransaction(newTemp))
        })
    }

    const dispatch = useDispatch()

    const [disable, setDisable] = useState(false)
    const [mark, setMark] = useState("x")
    const [win, setWin] = useState(false)
    const [lose, setLose] = useState(false)
    const [draw, setDraw] = useState(false)
    const [receiveAccount, setAccount] = useState()
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]


    useEffect(() => {
        socket = io.connect("http://localhost:9004");

        socket.on("onlines", function (message) {
            if (message.length !== 2) {
                dispatch(setBackdrop(true))

            } else if (message.length === 1) {
                setDisable(true)
            }
            else if (message.length === 2) {
                dispatch(setBackdrop(false))
            }
        })

        return () => {
            socket.disconnect();
        }

        // eslint-disable-next-line
    }, [])

    useEffect(() => {

        socket.on("recieve", (data) => {
            dispatch(setBoard(data.updateBoard))
            setDisable(data.disable)
            const newMark = data.mark === 'x' ? 'o' : 'x'
            setMark(newMark)

            setAccount(data.account)
            if (data.winner !== newMark && data.winner !== undefined) {
                setLose(true)
            }

            if (data.updateBoard.every((i) => i !== "") && data.winner === undefined) {
                setDraw(true)
                draww(account)
            }
        })

        // eslint-disable-next-line
    }, [socket])

    const checkWinner = (board) => {
        for (let i = 0; i < winConditions.length; i++) {
            const [x, y, z] = winConditions[i]

            if (board[x] && board[x] === board[y] && board[y] === board[z]) {
                return board[x]
            }
        }
    }

    const handleBoxClick = async (index) => {

        const updateBoard = board.map((val, ind) => {
            if (index === ind) {
                return mark
            } else {
                return val
            }
        })

        dispatch(setBoard(updateBoard))
        const winner = checkWinner(updateBoard)

        socket.emit("send", { updateBoard, account, disable, mark, winner })

        setDisable(!disable)

        if (winner === mark) {
            setWin(true)

            await revealWinner(account)
            await collect(account, receiveAccount)
        }

        if (updateBoard.every((i) => i !== "") && winner === undefined) {
            setDraw(true)
            draww(account)
        }
    }

    return (
        <div className='h-full w-full flex flex-col items-center'>
            <h1 className='text-white font-extrabold text-3xl pb-4'>Tic Tac Toe</h1>
            <Board disable={disable} board={board} onClick={handleBoxClick} />
            {win && (
                <WinModal />
            )}

            {lose && (
                <LoseModal />
            )}

            {draw && (
                <DrawModal />
            )}

            <BackdropLoading />
            <GameSetting />
        </div>
    )
}


export default React.memo(TicTacToe)