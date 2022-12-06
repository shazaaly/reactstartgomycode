import React, { useRef, useState } from 'react'

export const Form = ({ children }) => {
    const inputRef = useRef('')
    const [text, setText] = useState('');
    const fileInputRef = useRef(null)

    const handleChange = (e) => {
        e.preventDefault();
        console.log('refrence input has' + inputRef.current.value);
        // console.log(e.target.value);
        setText(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(inputRef.current.value);
        alert('Your form input : ' + text);
        setText('')

    }

    const fileSubmitHandler = (e) => {
        e.preventDefault();
        // console.log(fileInputRef.current.files[0]);
        alert('Your file input :' + fileInputRef.current.files[0].name);

    }
    return (
        <div>
            <h2> Form component</h2>

            <form onSubmit={handleSubmit}>
                <input ref={inputRef} type='text' onChange={handleChange} value={text} />
                <h2>{text}
                </h2>
            </form>

            <div>{children}</div>

            {/* {console.log(inputRef.current.value)    } */}
            <form onSubmit={fileSubmitHandler}>
                <input type='file' ref={fileInputRef} />
                <button type='submit'>Choose File</button>
            </form>

        </div>
    )
}
