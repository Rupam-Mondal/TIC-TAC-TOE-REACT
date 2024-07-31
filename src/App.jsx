import { useState } from 'react'
import './App.css'
import Board from './Components/Board/Board'

function App() {

  return (
    <>
      <div className='w-screen h-screen bg-slate-600 flex justify-center items-center flex-col'>
        <Board/>
      </div>
    </>
  )
}

export default App
