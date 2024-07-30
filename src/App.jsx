import { useState } from 'react'
import './App.css'
import Button from './Components/Button/Button'

function App() {
  const [turnx , setTurn] = useState(true)
  const [text, setText] = useState('')
  function Toggle() {
    if (turnx == true) {
      setText('X')
      setTurn(false)
    }
    else {
      setText('O')
      setTurn(true)
    }
  }

  return (
    <>
      <div className='w-screen h-screen bg-pink-200 flex justify-center items-center'>
        <div className='Board flex flex-wrap justify-between'>
          <Button
          btntext={text}
            onclickhandler={Toggle}
          />
          <Button
            btntext={text}
            onclickhandler={Toggle}
          />
          <Button
            btntext={text}
            onclickhandler={Toggle}
          
          />
          <Button
            btntext={text}
            onclickhandler={Toggle}
          />
          <Button
            btntext={text}
            onclickhandler={Toggle}
          />
          <Button
          btntext={text}
            onclickhandler={Toggle}
           />
          <Button
          btntext={text}
            onclickhandler={Toggle}
           />
          <Button
          btntext={text}
            onclickhandler={Toggle}
           />
          <Button
          btntext={text}
            onclickhandler={Toggle}
           />
        </div>
      </div>
    </>
  )
}

export default App
