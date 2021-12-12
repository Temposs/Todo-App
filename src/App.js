import React,{useState} from "react";
import uuidv4 from 'uuid/dist/v4'
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from "./components/TodoForm";
import TodoFilter from "./components/TodoFilter";


function App() {
  const [todos,setTodos]=useState([]);
  const [filterObj,setFilterObj]=useState({
    search:'',
    radio:'all'
  })

  const removeTodo=(id)=>{
    const newTodos= todos.filter(todo=>todo.id!==id)
    setTodos(newTodos)
  }


  const filter=(filter)=>{
    setFilterObj({
      search:filter.search,
      radio:filter.radio
    })
    const myRegEx=new RegExp('^'+filter.search)
    var newTodos
    switch(filter.radio){
      case 'all':

        newTodos=todos.map(todo=>{
          if(myRegEx.test(todo.title)){
            todo.visibility=true
            return todo
          }else{
            todo.visibility=false
            return todo
          }
        })

        setTodos(newTodos)
        break
      case 'completed':

        newTodos=todos.map(todo=>{
          if(myRegEx.test(todo.title)&&todo.complete===true){
            todo.visibility=true
            return todo
          }else{
            todo.visibility=false
            return todo
          }
        })

        setTodos(newTodos)
        break
      case 'uncompleted':

        newTodos=todos.map(todo=>{
          if(myRegEx.test(todo.title)&&todo.complete!==true){
            todo.visibility=true
            return todo
          }else{
            todo.visibility=false
            return todo
          }
        })

        setTodos(newTodos)
        break
      default:
        return
    }
  }

  const todoComplete=(id)=>{
    const newTodos=todos.map(todo=>{
      if(todo.id === id){
        todo.complete=!todo.complete
      }
      return todo
    })
    setTodos(newTodos)
    filter(filterObj)
  }

  const formSubmit=(value)=>{

    if(value.title===''||value.text===''||value.date==='') return

    const todo ={
      id:uuidv4(),
      title:value.title,
      text:value.text,
      date:value.date,
      complete:false,
      visibility:true
    }

    const newTodos =[todo,...todos]
    setTodos(newTodos)
  }
  return(
    <>
      <TodoForm onSubmit={formSubmit} />
      <TodoFilter filter={filter}/>
      <TodoList 
        todos={todos} 
        removeTodo={removeTodo} 
        todoComplete={todoComplete}/>
    </>
  );
}

export default App;
