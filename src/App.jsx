import TaskList from './TaskList'
import AddTask from './AddTask'
import './App.css'
import {TaskContext}  from './TaskContext';


function App(){

  return (
    <TaskContext>
   <div className="Header">
    <h2>ToDo List</h2>
    <q>The way to get started is to quit talking and begin doing. - Walt Disney</q>
   </div>
  
   <AddTask/>
   <TaskList/>
   </TaskContext>
  )
}

export default App