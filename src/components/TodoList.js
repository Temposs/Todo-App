import React from 'react'
import Todo from './Todo'


function TodoList({todos,removeTodo,todoComplete}) {
    return (
        todos.map(todo=>{
            if(todo.visibility){
                return (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        removeTodo={removeTodo}
                        todoComplete={todoComplete}
                    />
                )
            }
            return
        })
    )
}

export default TodoList
