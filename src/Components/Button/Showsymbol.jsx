import { useState } from "react";

function Showsymbol({btntext, onclickHandler}){
    const [text , setText] = useState('')
    let turnx = true
    if(turnx == true){
        setText('X')
        turnx = false
    }
    else{
        setText('O')
        turnx = true
    }
}

export default Showsymbol