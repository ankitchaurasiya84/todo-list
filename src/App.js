import logo from './logo.svg';
import './App.css';
import TodoInput from './components/todoInput';
import { useState } from 'react';
import Todolist from './components/todoList'
function App() {
  let [listTodo,setListTodo]=useState([]);
  let addlist=(inputText)=>{
    if(!inputText=='')
    setListTodo([...listTodo,inputText])
  }

  const deleteListItem=(key)=>{
    let newListTodo=[...listTodo];
    newListTodo.splice(key,1);
    setListTodo(newListTodo)
  }
 

 
  return (
  <div className="main-container">
<div className="center-container">
   <TodoInput addlist={addlist}/>
   <h1 className='app-heading'>
    TODO
   </h1>
   <hr/>
   {
    listTodo.map((listItem,i)=>{
      return (
       
       <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
      )
    })
   }
</div>
  </div>
  );
}

export default App;
