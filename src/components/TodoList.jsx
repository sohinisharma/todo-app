import React from 'react'
import './Todo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const TodoList = (props) => {

    const handleKeyDown = (e) => {
    if (e.key === 'Delete') {
      props.deleteItem();
    }
}

    return (
        <li className="list-item" onKeyDown={handleKeyDown}  tabIndex="0">
            {props.item}
            <span className='icons'>
            <FontAwesomeIcon icon={faTrash} className="icon-delete" onClick={props.deleteItem}/>
            </span>
        </li>

    )
}

export default TodoList
