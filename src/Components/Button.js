import React from 'react'

function Button({ children, style, type, click }) {
    return (
        <button className={style} onClick={click} type={type} >
            {children}
        </button>
    )
}

export default Button