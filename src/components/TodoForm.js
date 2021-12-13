import React,{useState,useRef} from "react"
import {Typography,AppBar,Card,
    CardActionArea,CardContent,
    CardMedia,CssBaseline,Grid,
  Toolbar,Button,TextField, Container} from '@material-ui/core'
import { Stack } from '@mui/material';
  

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
        <Container maxWidth='xs'>
            <Stack spacing={2}>
                <h1> What's the Plan for Today?</h1>
                <TextField 
                    style={{marginLeft:'10%',marginRight:'10%'}}
                    label="Add title"
                    value={inputTitle}
                    name="title"
                    onChange={handleTitleChange}
                    inputRef={inputTitleRef}
                />
                <TextField
                    style={{marginLeft:'10%',marginRight:'10%'}}
                    label="Add a description"
                    value={inputText}
                    name="text"
                    onChange={handleTextChange}
                    inputRef={inputTextRef}
                />
                <TextField
                    style={{marginLeft:'10%',marginRight:'10%'}}
                    id="date"
                    label="DeadLine"
                    type="date"
                    value={inputDate}
                    onChange={handleDateChange}
                    inputRef={inputDateRef}
                    sx={{ width: 220 }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <Button variant="contained" onClick={addTodo}>
                    Add todo
                </Button>
            </Stack>
        </Container>
    )
}

export default TodoForm
