import { useState } from 'react'
import './board.css'
import Button from '../Button/Button'

function Board(){
    const [turnX, setTurn] = useState(true)
    const [board , setBoard] = useState(Array(9).fill(null))
    function Toggle(index){
        if(board[index]) return

        const newBoard = [...Board]
        newBoard[index] = turnX ? 'x':'o'
        setBoard(newBoard)
        setTurn(!turnX)
    }
    return(
        <div className="board">
            {
                board.map((v , i) => {
                    <Button
                        value={v}
                        onClick={() => {
                            Toggle(index)
                        }}
                        key={i}
                    />
                })
            }
        </div>
    )
}

export default Board