import React from 'react'
import { useState } from 'react'
import { useDispatchContext } from './TaskContext'
function AddTask() {
  const [Add, setAdd] = useState("")
  let dispatch = useDispatchContext()
  return (
    <>
      <div className="Header">
        <h2>ToDo List</h2>
        <q>The way to get started is to quit talking and begin doing. - Walt Disney</q>
      </div>
      <div className="input-group mb-3 Add">
        <input type="text" value={Add} className="form-control" placeholder="Enter your Task" aria-label="Recipient's username" aria-describedby="button-addon2"
          onChange={(e) => setAdd(e.target.value)}
        />
        <button className="btn btn-outline-secondary textBtn" id="textBtn" type="button" onClick={() => {
          setAdd("")
          dispatch({
            type: 'add',
            id: nextId++,
            tasks: Add
          })
        }}><i class="bi bi-plus-square-dotted"></i></button>
      </div>
    </>
  )
}
let nextId = 0;

export default AddTask