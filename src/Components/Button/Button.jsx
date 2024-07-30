import { useState } from "react"

function Button({btntext , onclickhandler}){
    return(
        <>
            <button className="w-1/3 h-1/3 bg-blue-500 box-border border-blue-700 border-2 flex btnelement" onClick={onclickhandler}>
               {btntext}
            </button>
        </>
    )
}

export default Button