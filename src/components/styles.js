import {makeStyles} from '@material-ui/core/styles'


const useStyles=makeStyles((theme)=>({
    // Containers
    AppContainer:{
        background: 'linear-gradient(90deg,rgb(184, 201, 248) 0%,rgb(209, 229, 252) 100%)',
        marginTop:"2%",
        borderRadius:'20px',
        boxShadow: '1px 2px 4px #9e9fa0',
    },
    FilterContainer:{
        marginTop:'5px',
        border:'solid',
        borderWidth:'1px 0px 0px 0px',
        borderColor:'rgb(138, 138, 138)',
    },
    TodoFormContainer:{
        padding:'0px 60px 10px 60px',
    },

    // Completed/Uncompleted
    CompletedTodoContainer:{
        background: 'linear-gradient(90deg,rgb(184, 201, 248) 0%,rgb(209, 229, 252) 100%)',
        marginTop:'8px',
        borderRadius:'10px',
        boxShadow: '1px 2px 4px #9e9fa0',
    },
    UncompletedTodoContainer:{
        background: 'linear-gradient(90deg,rgb(200, 214, 253) 0%,rgb(232, 241, 252) 100%)',
        marginTop:'8px',
        borderRadius:'10px',
        boxShadow: '1px 2px 4px #9e9fa0',
    },
    TodoCompleted:{    
        opacity:'0.6',
        textDecoration: 'line-through',
    },  
    DeadlineCompleted:{      
        opacity:'0.6',
    },

}));

export default useStyles