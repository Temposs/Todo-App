import React from 'react'
import Todo from './Todo'


function TodoList({todos,removeTodo,todoComplete}) {
    return (
        todos.map(todo=>{
            return (
                <Todo
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    todoComplete={todoComplete}
                />
            )
        })
    )
}

export default TodoList
