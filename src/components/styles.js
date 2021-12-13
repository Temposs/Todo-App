import { Container } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

const useStyles=makeStyles((theme)=>({
    AppContainer:{
        backgroundColor:'rgb(184, 201, 248)',
        marginTop:"2%",
        borderRadius:'20px',

    },
    Container:{
        marginTop:'8px',
        display:'block',
    },
    TodoComplete:{
        background: 'linear-gradient(90deg,rgb(26, 112, 26) 0%,rgb(43, 196, 43) 100%)',
        marginTop:'8px',
        border:'solid 1px',
        borderRadius:'20px',
    },
    TodoUncomplete:{
        background: 'linear-gradient(90deg,rgb(119, 20, 20) 0%,rgb(231, 46, 46) 100%)',
        marginTop:'8px',
        border:'solid 1px',
        borderRadius:'20px',
    },
    removeTodoIcon:{
        color:'black',
        position:'relative',
        transform:'translate(0%,-50%)',
        top:'50%',
    },
    Show:{
        display:'block',
    },
    Hide:{
        display:'none'
    },
}));

export default useStyles