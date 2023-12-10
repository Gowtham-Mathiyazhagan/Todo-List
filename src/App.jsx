import TaskList from './TaskList'
import AddTask from './AddTask'
import './App.css'
import {TaskContext}  from './TaskContext';


function App(){

  return (
    <TaskContext>
   <AddTask/>
   <TaskList/>
   </TaskContext>
  )
}

export default App