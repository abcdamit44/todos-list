import React from 'react'

export default function Todositem(props) {
  return (
    <>
    <div className="w-25 p-2">
        <div className="card p-3 ">
            <h4>{props.todo.title}</h4>
            <p>{props.todo.desc}</p>
            <button className='btn btn-danger' onClick={props.onDelete}>Delete</button>
        </div>
    </div>
    
    <hr />
        
    </>
  )
}

