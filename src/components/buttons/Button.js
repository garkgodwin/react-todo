import React from 'react'

//?STYLES
import './Button.css'

function Button({cName,  handleClick, icon}) {
    return (
        <button className={"Button " + cName} onClick={handleClick}>
            {icon}
            <span className="btn-tl"></span>
        </button>
    )
}

export default Button;