import React from 'react'
import Box from './Box'

export default function Board({ board, onClick, disable }) {
    return (
        <div className='bg-transparent grid gap-1 grid-cols-3 place-content-center rounded-lg w-full 3xsma:w-2/3 xmed:w-1/2'>
            {board.map((box, index) => (
                <Box disable={disable} key={index} value={box} onClick={() => box === "" && onClick(index)} />
            ))}
        </div>
    )
}
