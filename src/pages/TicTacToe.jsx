import React, { useEffect, useState } from 'react'
import io from "socket.io-client"
import Board from '../components/Board'

const socket = io.connect("http://localhost:9004")
console.log(socket)

export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(""))
    const [disable, setDisable] = useState(false)
    const [mark, setMark] = useState("x")
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
        socket.on("cevap", (data) => {
            setBoard(data.updateBoard)
            setDisable(data.disable)
            setMark(data.mark === 'x' ? 'o' : 'x')
            if(data.winner !== mark && data.winner !== undefined) {
                alert("kaybettin")
            }
        })

        // eslint-disable-next-line
    }, [socket])

    const checkWinner = (board) => {
        for (let i = 0; i < winConditions.length; i++) {
            const [x,y,z] = winConditions[i]

            if(board[x] && board[x] === board[y] && board[y] === board[z]) {
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

        

        socket.emit("gonder", { updateBoard, id, disable, mark, winner })

        setDisable(!disable)

        if(winner === mark){
            alert("kazandın")
        }
    }

    return (
        <div className='h-full w-full flex flex-col items-center'>
            <h1 className='text-white font-extrabold text-3xl'>Tic Tac Toe</h1>
            <Board disable={disable} board={board} onClick={handleBoxClick} />
        </div>
    )
}
