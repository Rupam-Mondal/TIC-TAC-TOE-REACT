import { useState } from 'react'
import './App.css'
import Button from './Components/Button/Button'

function App() {

  return (
    <>
      <div className='w-screen h-screen bg-pink-200 flex justify-center items-center'>
        <div className='Board flex flex-wrap justify-between'>
          <Button/>
          <Button/>
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
      </div>
    </>
  )
}

export default App
