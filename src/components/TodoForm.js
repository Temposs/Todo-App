import React,{useState,useRef} from "react"
import {Typography,Button,TextField, Container} from '@material-ui/core'
import { Stack } from '@mui/material'
import useStyles from "./componentsStyles/styles"
  

function TodoForm({onSubmit}) {
    const [inputText,setText] = useState('')
    const [inputTitle,setTitle] = useState('')
    const [inputDate,setDate] = useState('')

    const [inputTitleError,setTitleError] = useState(false)
    const [inputDescriptionError,setDescriptionError] = useState(false)
    const [inputDateError,setDateError] = useState(false)

    const inputTextRef = useRef(null)
    const inputTitleRef = useRef(null)
    const inputDateRef = useRef(null)

    const classes=useStyles()
    

    const handleTextChange = e => {
        if(e.target.value === '' && inputDescriptionError){
            setDescriptionError(true)
        }else{
            setDescriptionError(false)
        }
        setText(e.target.value)
        
    } 
    const handleTitleChange = e => {
        if(e.target.value === '' && inputTitleError){
            setTitleError(true)
        }else{
            setTitleError(false)
        }
        setTitle(e.target.value)
    } 
    const handleDateChange = e => {
        if(e.target.value === '' && inputDateError){
            setDateError(true)
        }else{
            setDateError(false)
        }
        setDate(e.target.value)

    } 

    const addTodo = () => {
        const title = inputTitleRef.current.value
        const text = inputTextRef.current.value
        const date = inputDateRef.current.value

        if(title === '' || text === '' || date === ''){
            if(date === '')setDateError(true)
            if(text === '')setDescriptionError(true)
            if(title === '')setTitleError(true)
            return
        }
        const obj = {
            title:title,
            text:text,
            date:date
        };
        
        setDate('')
        setTitle('')
        setText('')
        onSubmit(obj)
    }
    
    return (
        <Container className = {classes.TodoFormContainer} maxWidth = 'xs'>
            <Stack spacing={2}>
                <Typography align = 'center' variant="h4">What's the Plan for Today?</Typography>
                <TextField 
                    label = "Add title"
                    value = {inputTitle}
                    name = "title"
                    onChange = {handleTitleChange}
                    inputRef = {inputTitleRef}
                    error = {inputTitleError}
                />
                <TextField
                    label = "Add a description"
                    value = {inputText}
                    name = "text"
                    onChange = {handleTextChange}
                    inputRef = {inputTextRef}
                    error = {inputDescriptionError}
                />
                <TextField
                    id = "date"
                    label = "DeadLine"
                    type = "date"
                    value = {inputDate}
                    onChange = {handleDateChange}
                    inputRef = {inputDateRef}
                    sx = {{ width: 220 }}
                    InputLabelProps = {{
                    shrink: true,
                    }}
                    error = {inputDateError}
                />
                <Button 
                    variant = "contained" 
                    onClick = {addTodo}
                >
                    Add todo
                </Button>
            </Stack>
        </Container>
    )
}

export default TodoForm
