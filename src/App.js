import React,{useState,useEffect} from "react"
import uuidv4 from 'uuid/dist/v4'
import TodoList from './components/TodoList'
import TodoForm from "./components/TodoForm"
import TodoFilter from "./components/TodoFilter"
import {Typography,AppBar,CssBaseline,
Toolbar, Container} from '@material-ui/core'
import useStyles from "./components/componentsStyles/styles"

function App() {
  const [todos,setTodos] = useState([]);
  const [filterObj,setFilterObj] = useState({
    search:'', // search string 
    radio:'all' // searching modes all/completed/uncompleted
  })
  const classes = useStyles()


  const removeTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  useEffect(() => {
    (async () => {
      const url ='https://61b9eedc38f69a0017ce6390.mockapi.io/Todo'
      const response = await fetch(url)
      const decodeResponse = await response.json()
    
      setTodos(decodeResponse)
    })()
  },[])

  const filter = (filter) => {
    setFilterObj({
      search:filter.search,
      radio:filter.radio
    })
    const myRegEx = new RegExp('^'+filter.search.toLowerCase())
    var newTodos
    switch(filter.radio){
      case 'all':

        newTodos = todos.map(todo => {
          if(myRegEx.test(todo.title.toLowerCase())){
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

        newTodos = todos.map(todo => {
          if(myRegEx.test(todo.title.toLowerCase()) && todo.complete === true){
            todo.visibility = true
            return todo
          }else{
            todo.visibility = false
            return todo
          }
        })

        setTodos(newTodos)
        break
      case 'uncompleted':

        newTodos = todos.map(todo => {
          if(myRegEx.test(todo.title.toLowerCase())&&todo.complete !== true){
            todo.visibility = true
            return todo
          }else{
            todo.visibility = false
            return todo
          }
        })

        setTodos(newTodos)
        break
      default:
        return
    }
  }

  const todoComplete = (id) => {
    const newTodos = todos.map(todo => {
      if(todo.id === id){
        todo.complete =! todo.complete
      }
      return todo
    })
    setTodos(newTodos)
    filter(filterObj)
  }

  const formSubmit = async(value) => {

    if(value.title === '' || value.text === '' || value.date === '') return
    
    const todo = {
      id:uuidv4(),
      title:value.title,
      text:value.text,
      date:value.date,
      complete:false,
      visibility:true
    }
    let options = {
      method:'POST',
      headers:{
        'Content-Type': 
        'application/json;charset=utf-8'
      },
      body: JSON.stringify(todo)
    }
    fetch('https://61b9eedc38f69a0017ce6390.mockapi.io/Todo',options)
    .then((res) => console.log(res))
    const newTodos = [todo,...todos]
    setTodos(newTodos)
  }
  return(
    <>
      <CssBaseline/>
      <AppBar position = "relative">
        <Toolbar>
          <Typography variant = "h6">
            Todo List
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth = "sm" className = {classes.AppContainer}>
        <TodoForm onSubmit = {formSubmit} />
        <TodoFilter filter = {filter}/>
      </Container>
      <TodoList 
        todos = {todos} 
        removeTodo = {removeTodo} 
        todoComplete = {todoComplete}
      />
    </>
  );
}

export default App;
