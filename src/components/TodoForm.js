import React,{useState,useRef} from "react";

function TodoForm({onSubmit}) {
    const [inputText,setText]=useState('');
    const [inputTitle,setTitle]=useState('');
    const [inputDate,setDate]=useState('');
    const inputTextRef= useRef(null);
    const inputTitleRef=useRef(null);
    const inputDateRef=useRef(null);
    
    

    const handleTextChange = e =>{
        setText(e.target.value);
    } 
    const handleTitleChange = e =>{
        setTitle(e.target.value);
    } 
    const handleDateChange = e =>{
        setDate(e.target.value);
    } 

    const addTodo =()=>{
        const title=inputTitleRef.current.value
        const text=inputTextRef.current.value
        const date=inputDateRef.current.value

        if(title===''||text===''||date===''){
            return
        }
        const obj={
            title:title,
            text:text,
            date:date
        };
        setDate('')
        setTitle('')
        setText('')
        onSubmit(obj);
    }
    
    return (
        <div>
            <h1> What's the Plan for Today?</h1>
          <input
              type="text"
              placeholder="Add a todo"
              value={inputText}
              name="text"
              className="todo-input"
              onChange={handleTextChange}
              ref={inputTextRef}
          />
          <input
              type="text"
              placeholder="Add a title"
              value={inputTitle}
              name="title"
              className="title-input"
              onChange={handleTitleChange}
              ref={inputTitleRef}
          />
          <input
              type="date"
              value={inputDate}
              name="date"
              className="title-input"
              onChange={handleDateChange}
              ref={inputDateRef}
          />
          <button className='todo-button' onClick={addTodo}>
              Add todo
          </button>
        </div>
    )
}

export default TodoForm
