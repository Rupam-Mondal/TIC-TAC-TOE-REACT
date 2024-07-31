import { useState, useEffect } from 'react'
import './board.css'
import Button from '../Button/Button'

function Board(){

    const patterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    const [board , setBoard] = useState(Array(9).fill(null))
    const [turnX , setTurn] = useState(true)
    const [winner , setWinner] = useState(null)
    const [winnerprint , setPrint] = useState(null)


    useEffect(() => {
        const ans = checkWinner()
        if(ans){
            setPrint(`Winner is = ${ans}`)
        }
    }, [board])

    function checkWinner(){

        for(let pat of patterns){
            const [a , b , c] = pat
            if(board[a] != null && board[b] != null && board[c] != null){
                if(board[a] == board[b] && board[b] == board[c]){
                    setWinner(board[a])
                    console.log(board[a])
                    return board[a]
                }
            }
        }
        return null
    }

    function reserGame(){
        setBoard(Array(9).fill(null))
        setWinner(null)
        setTurn(true)
        setPrint(null)
    }

    function Toggle(index){
        if(board[index] || winner)return

        const newBoard = [...board]
        newBoard[index] = turnX ? 'X':'O'
        setBoard(newBoard)
        
        setTurn(!turnX)
    }
    return (
        <>
            <div className='w-96 h-16 mb-5 flex justify-center items-center font-mono text-3xl'>{winnerprint}</div>
            <div className='board'>
                {
                    board.map((v , i) => (
                        <Button
                            value={v}
                            onClick={() => {
                                Toggle(i)
                            }}
                            key={i}
                        />
                    ))
                }
            </div>
            <button className='h-10 w-24 mt-6 bg-slate-500 rounded-md' onClick={reserGame}>Reset Game</button>
        </>
    )
}

export default Board