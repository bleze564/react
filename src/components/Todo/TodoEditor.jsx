import React from 'react';
export const TodoEditor =({addTodo})=>{
    
    const handleSubmit = () =>{
        event.preventDefault();
        const value = event.currentTarget.elements.create.value;
        addTodo(value)
    }
}