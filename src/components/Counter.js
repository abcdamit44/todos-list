import React, { useState } from 'react';

export default function Counter() {
    const [text, setText] = useState(0);
    const increase = () => {
        let newText = text;
        newText++;
        setText(newText);
    }
    const decrease = () => {
        let newText = text;
        if (newText <= 0) {
            newText = 0;
        }
        else {
            newText--;
        }
        setText(newText);
    }
    let myStyle = {
        height: "60vh"
    }
    return (
        <>
            <div className="container">
                <h1 class="text-center mt-3">Counter</h1>
                <div className="text-center mt-5" style={myStyle}>
                    <h2 className='text-primary display-1'>{text}</h2>
                    <button className='btn btn-sm btn-success m-3' onClick={increase}>Increase</button>
                    <button className='btn btn-sm btn-danger m-3' onClick={decrease} disabled={text <= 0 ? true : false} id="decrease">Decrease</button>
                </div>
            </div>
        </>
    )
}
