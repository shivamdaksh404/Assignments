import React, { useState } from 'react'
import './InputField.css'

export default function InputField() {
    const [text, setText]= useState("")
    const [error,setError]=useState(null)

 function showInput(e){
    console.log(e.target.value);
    if(e.target.value.length > 100){
        setText(e.target.value)
        setError("Character limit only 100 word")
    }
    else{
        setText(e.target.value)
        setError(null)
    }

 };

    return (
        <div>
            <div className='input-container'>
                <h1 className='heading'>Type Here</h1>
                <textarea
                    className='Input'
                    type="text"
                    placeholder='Text something...'
                    onChange={showInput}
                    value={text}

                />
                <span className='error'>{error}</span>

            </div>
        </div>
    )
}
