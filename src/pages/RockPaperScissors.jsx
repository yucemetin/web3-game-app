import React, { useEffect, useState } from 'react'
import io from "socket.io-client"
import LoseModal from '../components/LoseModal'
import WinModal from '../components/WinModal'
import DrawModal from '../components/DrawModal'
import { ethers } from "ethers"
import Lock from "../artifacts/contracts/Lock.sol/Lock.json"
import BackdropLoading from '../components/BackdropLoading'
import { setBackdrop } from '../redux/tictactoeGame'
import { useDispatch, useSelector } from "react-redux"
import GameSetting from '../components/GameSetting'
import SelectRPS from '../components/SelectRPS'
import { setRpsModal } from '../redux/tictactoeGame'

let socket;

const contractAddress = "0x0B306BF915C4d645ff596e518fAf3F9669b97016"

export default function RockPaperScissors() {

    const { account } = useSelector(state => state.game)

    const [win, setWin] = useState(false)
    const [lose, setLose] = useState(false)
    const [draw, setDraw] = useState(false)

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
    }

    async function collect(account1, account2) {

        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, Lock.abi, signer)

        const transaction = await contract.collect(account1, account2)
        await transaction.wait()
    }

    const dispatch = useDispatch()

    useEffect(() => {
        socket = io.connect("http://localhost:9004");

        dispatch(setRpsModal(true))

        socket.on("onlines", function (message) {
            if (message.length !== 2) {
                dispatch(setBackdrop(true))

            } else {
                dispatch(setBackdrop(false))
            }
        })

        return () => {
            socket.disconnect();
        }

        // eslint-disable-next-line
    }, [])

    useEffect(() => {

        socket.on("recieve2", (data) => {

        })

        // eslint-disable-next-line
    }, [socket])

    return (
        <div>
            <SelectRPS />
            {win && (
                <WinModal />
            )}

            {lose && (
                <LoseModal />
            )}

            {draw && (
                <DrawModal />
            )}

            <GameSetting />
        </div>
    )
}
//<BackdropLoading />