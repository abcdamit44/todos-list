import React from 'react'
import Todositem from './Todositem'

export default function Todos(props) {
  
  return (
    <>
    <div className="container my-5">
        <h2 className=''>Todos</h2>
        
        <div className="">
        {
            props.todolist.length === 0 ? "No Todo to display" :
            props.todolist.map((todo)=>{
                return (<Todositem todo={todo} key={todo.sno} onDelete={props.onDelete}/>)
            })
        }
        </div>
    </div>
    </>
  )
}
