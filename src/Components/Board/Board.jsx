import { useEffect, useState } from "react";
import Button from "../Button/Button";
import './board.css'

function Board(){
    const [board , setBoard] = useState(Array(9).fill(null))
    const [turnX , setTurn] = useState(true)
    const [winner , setWinner] = useState(false)
    const [winnerprint, setPrint] = useState(null)
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
    useEffect(() => {
        const ans = checkWinner()
        if(ans){
            console.log("winner is = "+ans)
            setPrint("Winner is = "+ans)
        }
    } , [board])
    function checkWinner(){
        for(let pat of patterns){
            const [a , b , c] = pat
            if(board[a] && board[a] == board[b] && board[b] == board[c]){
                setWinner(true)
                return board[a];
            }
        }
    }
    function Toggle(index){
        if(board[index] || winner) return

        const newBoard = [...board]
        newBoard[index] = turnX ? 'X' : 'O'
        setBoard(newBoard)

        setTurn(!turnX)
    }
    function resetGame(){
        setBoard(Array(9).fill(null))
        setTurn(true)
        setWinner(false)
        setPrint(null)
    }
    return(
        <>
            <div className='w-96 h-16 mb-5 flex justify-center items-center font-mono text-3xl text-white'>{winnerprint}</div>
            <div className="board">
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
            <button className='h-10 w-24 mt-6 bg-white rounded-md' onClick={resetGame}>Reset Game</button>
        </>
    )
}

export default Board