import React from 'react'
import Todositem from './Todositem'

export default function Todos(props) {
  return (
    <>
    <div className="container my-3">
        <h2 className='text-center'>Todos</h2>
        <div className="d-flex justify-content-start flex-wrap">

        {
            props.todolist.length === 0 ? "No Todo to display" :
            props.todolist.map((todo)=>{
                return (<Todositem todo={todo} onDelete={props.onDelete}/>)
            })
        }
        </div>

    </div>
    </>
  )
}
