import React, { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


const App = () => {

  const [listTodo, setlistTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== '')
      setlistTodo([...listTodo, inputText]);
  }

  const deletelistItem = (key) => {
    let newlistTodo = [...listTodo];
    newlistTodo.splice(key, 1)
    setlistTodo([...newlistTodo])
  }

  return (
    <div>
      <div className="main-container">
        <div className="center-container">
          <TodoInput addList={addList} />
          <h1 className='app-heading'>TODO</h1>
          <hr className='horizontal-line'/>
          {listTodo.map((ListItem, i) => {
            return (
              <TodoList key={i} item={ListItem} deleteItem={() => deletelistItem(i)} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
