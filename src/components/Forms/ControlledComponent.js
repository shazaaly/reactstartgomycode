import React, { useState } from 'react'

export const ControlledComponent = () => {
    const [score, setScore] = useState('10');
    const [comment, setComment] = useState("");

    const changeHandler = (e) => {
        e.preventDefault();
        setScore(e.target.value);

    }
    const formSubmitHandle = (e) => {
        e.preventDefault();
        //validate
        if (comment.length <= 10 && Number(score) <= 5) {
            alert('Please explain why your ranking is low ')
            return;

        }else{
            setComment("");
            setScore('10');

        }

        

        console.log('FORM SUBMITTED');



    }
    return (
        <div style={{ 'padding': '10px' }}>

            <form onSubmit={formSubmitHandle}>
                <h2>Ranking Course  </h2>
                <label style={{ 'padding': '10px' }} htmlFor="range">Rate: {score}  </label>

                <input id='range' type="range" min='0' max='10' value={score} onChange={changeHandler} /> <br />

                <div className='comment'>
                    <textarea cols='35' rows='10' value={comment} onChange={(e) => setComment(e.target.value)} />

                </div>
                <button style={{ width: '14rem' }} type='submit' >Submit</button>

            </form>
        </div>
    )
}
