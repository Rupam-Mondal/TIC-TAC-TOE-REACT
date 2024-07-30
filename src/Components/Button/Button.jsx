import './button.css'

function Button({value , onClick}){
    console.log(value)
    return(
        <>
            <button className='section' onClick={onClick}>
                {value}
            </button>
        </>
    )
}

export default Button