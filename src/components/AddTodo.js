import React, { useState } from 'react';


export default function AddTodo({ addTodo }) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("")
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank")
        } else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className='container mt-4'>
            <h3>Add a todo</h3>
            <form className='w-50 mt-3' onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Todo Description</label>
                    <textarea type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" rows={5}></textarea>
                </div>

                <button type="submit" className="btn btn-sm btn-success">Add todo</button>
            </form>
        </div>
    )
}
