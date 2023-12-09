import React from 'react'
import { useState } from 'react'
import {useTaskContext} from './TaskContext'
import {useDispatchContext} from './TaskContext'
import win from "./assets/win.mp4"


function TaskList() {
  let tasks= useTaskContext()
  return (
    <>
    
    <ul className='task-ul'>
    {tasks.map(data=>{
   return (
   <>
   <li key={String(data.id)}>
    {console.log(data.id)}
    <Task task={data}/>
      </li>
      </>)
    })}
    </ul>
    </>

  )
}

export default TaskList

  function Task ({task}){
    
    let dispatch =useDispatchContext()
    const [isEdit, setEdit]= useState(false)
    let textContant;
  
    if(isEdit){
       return textContant = (
        <>
     <input className='checkBox' type="checkbox" checked={task.done}/>
        <input className='editInput'  type="text" value={task.text} onChange={e=>dispatch({
  type:"change",
   id:task.id,
      text:e.target.value,
      done:task.done
      })} />
      <video style={{opacity:0}} src={win} autoPlay muted loop/>
      <div className='button'>
        <button type="button" className="btn btn-outline-success bi bi-cloud-plus "  onClick={()=>{ setEdit(false) }}></button>
        <button  type="button" className="btn btn-outline-danger bi bi-trash" onClick={()=>dispatch({type:"delete",id:task.id})}></button>
        </div>
        </>
        )
    }
    else{
        return textContant = (
            <>
       <input className='checkBox' type="checkbox" checked={task.done} onChange={(e)=> dispatch({
  type:"change",
  id:task.id,
  text:task.text,
        done:e.target.checked
      })}/>
            {task.done ? <div className='deltaskContant'>{task.text} <del>{task.text}</del> </div> : <div className='taskContant'>{task.text}</div>} 
            {task.done ? <video src={win} autoPlay muted loop/> : <video style={{opacity:0}} src={win} autoPlay muted loop/>}
            <div className='button'>
            <button type="button" className="btn btn-outline-primary bi bi-pencil-square" onClick={()=>setEdit(true)}></button>
            <button  type="button" className="btn btn-outline-danger bi bi-trash" onClick={()=>dispatch({type:"delete",id:task.id})} ></button>
            </div>
            </>
            )
    }
    
}
