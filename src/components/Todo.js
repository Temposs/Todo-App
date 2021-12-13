import { Grid,Container,Typography, makeStyles} from '@material-ui/core';
import { grid } from '@mui/system';
import React from 'react';
import {RiCloseCircleLine}  from 'react-icons/ri';
import { Stack } from '@mui/material';
import useStyles from './styles';

function Todo({todo,removeTodo,todoComplete}) {
    const classes=useStyles()

    return (
        <Container maxWidth='sm' 
            className={todo.visibility ? classes.Container :classes.Hide}
        >
            <Grid 
            container
            justifyContent='center' 
            className={ todo.complete ? classes.TodoComplete: classes.TodoUncomplete}
            >
                <Stack direction='row'>
                    <Grid container style={{backgroundColor:'white'}}>
                        <Grid xs={10} onClick={()=> todoComplete(todo.id)}>
                            <Grid xs={12}>
                                <Stack justifyContent='center' spacing={3} direction='row'>
                                    <Typography>
                                        {todo.title}
                                    </Typography>
                                    <Typography>
                                        {todo.date}
                                    </Typography>
                                </Stack>
                            </Grid>

                            <Grid container xs={12} justifyContent='center'>
                                <Typography>
                                    {todo.text}
                                </Typography>
                            </Grid>

                        </Grid>
                        <Grid container xs={2} justifyContent='center'>
                            <RiCloseCircleLine
                                size='35px'
                                className={classes.removeTodoIcon}
                                onClick={()=> removeTodo(todo.id)}
                            />
                        </Grid>
                    </Grid> 
                </Stack>
            </Grid>
        </Container>
    )
}

export default Todo
