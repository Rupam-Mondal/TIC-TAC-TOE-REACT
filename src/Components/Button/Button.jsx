import './button.css'

function Button({value , onClick}){
    return(
        <>
            <button className='section' onClick={onClick}>
                {value}
            </button>
        </>
    )
}

export default Button