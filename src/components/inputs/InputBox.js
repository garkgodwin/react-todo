import React from 'react'

//?STYLES
import './InputBox.css'

function InputBox({cName, placeholder, value, setValue}) {
    return (
        <div className={"InputBox " + cName}>
            <input type="text" placeholder={placeholder} value={value.title}
                onChange={(e) => {
                    setValue({
                        ...value,
                        title: e.target.value
                    })
                }}
            />
        </div>
    )}

export default InputBox;
