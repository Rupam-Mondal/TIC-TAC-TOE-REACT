import { useState } from 'react'
import './board.css'
import Button from '../Button/Button'

function Board(){
    const [board , setBoard] = useState(Array(9).fill(null))
    const [turnX , setTurn] = useState(true)

    function Toggle(index){
        if(board[index])return

        const newBoard = [...board]
        newBoard[index] = turnX ? 'X':'O'
        setBoard(newBoard)
        setTurn(!turnX)
    }
    return (
        <>
            <div className='board'>
                {
                    board.map((v , i) => (
                        <Button
                            value={v}
                            onClick={() => {
                                Toggle(i)
                            }}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default Board