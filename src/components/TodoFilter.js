import React,{useState,useRef} from 'react'
import {FiDelete}  from 'react-icons/fi';
import {Typography,Grid,TextField, Container, Button} from '@material-ui/core'
import {FormControl,FormControlLabel,Stack,RadioGroup,Radio} from '@mui/material'
import { grid } from '@mui/system';

function TodoFilter({filter}) {
    const [radio,setInputRadio]=useState('all')

    const inputSearchRef=useRef(null)

    const HandleSearchChange=()=>{
 
        const newFilter={
            search:inputSearchRef.current.value,
            radio:radio
        }

        filter(newFilter)
    }

    const handleRadioChange= e =>{
        setInputRadio(e.target.value)

        const newFilter={
            search:inputSearchRef.current.value,
            radio:e.target.value
        }

        filter(newFilter)
    }

    const clearSearch =(e)=>{
        e.preventDefault()
        inputSearchRef.current.value=''
    }

    return (
        <Container maxWidth="xs">
            <FormControl>
                <Grid container justifyContent='center'>
                    <Grid item >
                        <TextField 
                        label="Search"
                        onChange={HandleSearchChange} 
                        type="input"
                        margin='dense'
                        inputRef={inputSearchRef} 
                        />
                        <Button style={{marginTop:'3%'}} variant="contained" onClick={clearSearch}>Clear</Button>
                        {/* <FiDelete size="30px" /> */}
                    </Grid>
                    <Grid item >
                        <RadioGroup row>
                            <FormControlLabel 
                                onChange={handleRadioChange} 
                                value="all" 
                                control={<Radio />} 
                                label="All" 
                                checked={radio==='all'}
                            />
                            <FormControlLabel 
                                onChange={handleRadioChange} 
                                value="completed" 
                                control={<Radio />} 
                                label="Completed" 
                                checked={radio==='completed'}
                            />
                            <FormControlLabel 
                                onChange={handleRadioChange} 
                                value="uncompleted" 
                                control={<Radio />} 
                                label="Uncompleted" 
                                checked={radio==='uncompleted'}
                            />
                        </RadioGroup>
                    </Grid>
                </Grid>
            </FormControl>
        </Container>
    )
}

export default TodoFilter
