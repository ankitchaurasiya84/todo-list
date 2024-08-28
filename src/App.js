import './App.css';
import TodoInput from './components/todoInput';
import { useState ,useEffect} from 'react';
import Todolist from './components/todoList'

function App() {
  let [listTodo,setListTodo]=useState([]);

  useEffect(()=>{
    setandStore()
  },[])

  let setandStore = () => {
    const storedTodoList = localStorage.getItem('todoList');
    if (storedTodoList) {
      setListTodo(JSON.parse(storedTodoList));
    }
  }

  


  useEffect(()=>{
    //console.log("gggggg"+listTodo);
    if(listTodo.length>0)
    localStorage.setItem('todoList', JSON.stringify(listTodo));

  },[listTodo])

  let addlist=(inputText)=>{
    if(!inputText=='')
    setListTodo([...listTodo,inputText])

  
  }
  console.log(addlist);

  const deleteListItem=(key)=>{
    let newListTodo=[...listTodo];
    newListTodo.splice(key,1);
    setListTodo(newListTodo)
   
    
  }
//  Const= editList=((key)=>{

//  })

 
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
