import React, { useState } from 'react'

export const LittleForm = () => {
    const [name, setName] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        setName(e.target.value)
        console.log('form submitted!');
        setName('')

    }
    return (
        <div className='form-container'>
            <form onSubmit={submitHandler}>
                <label htmlFor='name'>User Name</label>

                <input type='text' placeholder='name' id='name' value={name} 
                onChange={(e) => setName(e.target.value)} />
                <button disabled={!name} >Submit</button>


            </form>
            <h3>{name}</h3>
        </div>
    )
}
