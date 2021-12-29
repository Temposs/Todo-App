import React,{useState,useRef} from 'react'
import {Typography,Grid,TextField, Container, Button} from '@material-ui/core'
import {FormControl,FormControlLabel,RadioGroup,Radio} from '@mui/material'
import useStyle from './componentsStyles/styles'

function TodoFilter({filter}) {
    const [radio,setInputRadio] = useState('all')

    const inputSearchRef = useRef(null)

    const classes = useStyle()
    
    const HandleSearchChange = () => {
 
        const newFilter = {
            search:inputSearchRef.current.value,
            radio:radio
        }

        filter(newFilter)
    }

    const handleRadioChange = e => {
        setInputRadio(e.target.value)

        const newFilter = {
            search:inputSearchRef.current.value,
            radio:e.target.value
        }

        filter(newFilter)
    }

    const clearSearch = (e) => {
        e.preventDefault()
        inputSearchRef.current.value=''

        const newFilter = {
            search:'',
            radio:radio
        }
        filter(newFilter)
    }

    return (
        <Container className = {classes.FilterContainer}  maxWidth = "xs" >
            <FormControl >
                <Grid container justifyContent = 'center' >
                    <Grid item xs = {12} >
                        <Typography align = 'center' variant = "h5">Filter</Typography>
                    </Grid>
                    <Grid>
                        <TextField 
                        label = "Search"
                        onChange = {HandleSearchChange} 
                        type = "input"
                        margin = 'dense'
                        inputRef = {inputSearchRef} 
                        />
                        <Button style = {{marginTop:'6%'}} onClick = {clearSearch}>Clear</Button>
                    </Grid>
                    <Grid  >
                        <RadioGroup row>
                            <FormControlLabel 
                                onChange = {handleRadioChange} 
                                value = "all" 
                                control = {<Radio />} 
                                label = "All" 
                                checked = {radio === 'all'}
                            />
                            <FormControlLabel 
                                onChange = {handleRadioChange} 
                                value = "completed" 
                                control = {<Radio />} 
                                label = "Completed" 
                                checked = {radio === 'completed'}
                            />
                            <FormControlLabel 
                                onChange = {handleRadioChange} 
                                value = "uncompleted" 
                                control = {<Radio />} 
                                label = "Uncompleted" 
                                checked = {radio === 'uncompleted'}
                            />
                        </RadioGroup>
                    </Grid>
                </Grid>
            </FormControl>
        </Container>
    )
}

export default TodoFilter
