import React, { useEffect, useState } from 'react'
import io from "socket.io-client"
import Board from '../components/Board'
import LoseModal from '../components/LoseModal'
import WinModal from '../components/WinModal'
import DrawModal from '../components/DrawModal'

const socket = io.connect("http://localhost:9004")

export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(""))
    const [disable, setDisable] = useState(false)
    const [mark, setMark] = useState("x")
    const [win, setWin] = useState(false)
    const [lose, setLose] = useState(false)
    const [draw, setDraw] = useState(false)
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
    /*
    useEffect(()=> {
        socket.on("onlines",function(message){
            console.log(message)
            console.log(socket.id)
            if(message[1] === socket.id) {
                console.log("aa")
            }
        })
    },[])
*/

    useEffect(() => {

        socket.on("recieve", (data) => {
            setBoard(data.updateBoard)
            setDisable(data.disable)
            const newMark = data.mark === 'x' ? 'o' : 'x'
            setMark(newMark)


            if (data.winner !== newMark && data.winner !== undefined) {
                setLose(true)
            }

            if (data.updateBoard.every((i) => i !== "") && data.winner === undefined) {
                setDraw(true)
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

    const handleBoxClick = (index) => {

        const updateBoard = board.map((val, ind) => {
            if (index === ind) {
                return mark
            } else {
                return val
            }
        })

        setBoard(updateBoard)
        const id = socket.id
        const winner = checkWinner(updateBoard)



        socket.emit("send", { updateBoard, id, disable, mark, winner })

        setDisable(!disable)
        
        if (winner === mark) {
            setWin(true)
        }

        if (updateBoard.every((i) => i !== "") && winner === undefined) {
            setDraw(true)
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

        </div>
    )
}
