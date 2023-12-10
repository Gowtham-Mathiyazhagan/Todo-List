// We are using useImmerReducer hooks library.
import { useImmerReducer } from 'use-immer';
import { createContext } from 'react';
import { useContext, useEffect } from 'react';
// import { Children } from 'react';

let LevelTaskContext = createContext(null);
let LevelDispatchContext = createContext(null);

export function TaskContext({children} ) {
    let [task, dispatch] = useImmerReducer(taskReducer, JSON.parse(localStorage.getItem("tasks")) || [] ) // This hooks take first value as afunction and second value as a initialValue.
    
    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(task))
 
        return () =>   localStorage.setItem("tasks",JSON.stringify(task))
     },[task])
    
    return (
        <>
            <LevelTaskContext.Provider value={task}>
                <LevelDispatchContext.Provider value={dispatch}>
                    {children}
                </LevelDispatchContext.Provider>
            </LevelTaskContext.Provider>
        </>
    )
    }
// Created coustom hooks to reduce the code complex
export function useTaskContext() {
    return useContext(LevelTaskContext)
}

export function useDispatchContext() {
    return useContext(LevelDispatchContext)
}

// reducer function 
function taskReducer(draft, action) {
    // Based on the action type switch statement going to exeute 
   switch (action.type) {

       case 'add': {
         draft.push({ id: action.id, text: action.tasks, done: false })
           break;

       }
       case 'delete':
           {
              return draft.filter(val => val.id!==action.id);
            //    break;

           }
       case 'change':
           {
                const index = draft.findIndex((t) => t.id === action.id);
                 draft[index] = action;
               break;
           }
       default: {
           throw Error('Unknown action: ' + action.type);
       }
   }
}