import React from 'react';
import {RiCloseCircleLine}  from 'react-icons/ri';


function Todo({todo,removeTodo,todoComplete}) {
    return (
        <div className={todo.visibility ? 'Show' :'Hide'}>
            <div 
                className={todo.complete ? 'Completed' : 'Uncompleted'} 
                key={todo.id}       
            >
                <div onClick={()=> todoComplete(todo.id)}>
                    <div>
                        {todo.title}
                    </div>  
                    <div>
                        {todo.text}
                    </div>  
                    <div>
                        {todo.date}
                    </div>  
                </div>

                <div className="icons">
                    <RiCloseCircleLine
                        onClick={()=> removeTodo(todo.id)}
                        className='delete-icon'
                    />
                </div>
            </div>
        </div>
    )
}

export default Todo
