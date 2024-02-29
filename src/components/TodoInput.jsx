import React, { useState } from 'react'
import './Todo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const TodoInput = (props) => {

    const [inputText, setinputText] = useState();

    const handleEnterPress = (e) => {
        if (e.key === 'Enter') {
            props.addList(inputText);
            setinputText('');
        }
    }


    return (
        <div className="input-container">
            <div className='input-sub-container'><input type="text" placeholder='Enter your todo' className='input-box-todo' value={inputText} onChange={e => { setinputText(e.target.value) }} onKeyDown={handleEnterPress} />
            
            <FontAwesomeIcon icon={faPlus} className='add-btn' onClick={() => {
                props.addList(inputText)
                setinputText("")
            }} /></div>
            <div>{inputText}</div>
        </div>
    )
}

export default TodoInput
