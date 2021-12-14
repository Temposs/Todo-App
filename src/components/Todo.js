import { Grid,Container,Typography,Button} from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

function Todo({todo,removeTodo,todoComplete}) {
    const classes=useStyles()

    return (
        <Container 
            maxWidth='sm' 
            className={ todo.complete ? classes.UncompletedTodoContainer: classes.CompletedTodoContainer}
        >   
        
            <Grid 
                container 
                direction='row'
            >
                <Grid 
                    container item xs={10} 
                    justifyContent='center' 
                    onClick={()=> todoComplete(todo.id)}
                >
                    <Grid container justifyContent='center' direction='column'>
                        <Grid 
                            container 
                            justifyContent='center' 
                            className={ todo.complete ? classes.TodoCompleted: ''}
                        >
                            {/* Title */}
                            <Typography variant='h5'>{todo.title}</Typography>
                        </Grid>
                        <Grid 
                            container
                            direction='row'                      
                        >
                            <Grid 
                                item
                                xs={3}
                                className={ todo.complete ? classes.DeadlineCompleted: ''}
                            >
                                {/* Deadline */}
                                <Typography>{todo.date}</Typography>
                            </Grid>
                            <Grid 
                                container
                                justifyContent='center'
                                item
                                xs={9}
                                className={ todo.complete ? classes.TodoCompleted: ''}
                            >
                                {/* Description */}
                                <Typography>{todo.text}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid 
                    container 
                    item 
                    justifyContent='center'
                    xs={2} 
                >
                    <Button 
                        style={{margin:'2px 0px 2px 0px'}} 
                        onClick={()=> removeTodo(todo.id)}
                    >
                        Delete Todo
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Todo
