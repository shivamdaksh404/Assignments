import {Fragment, useState} from 'react'
import { ToDoList } from './ToDoList'

export function TaskList(){ 
    const [addList, setAddList] =useState("")
    const [submitList, setSubmitList] = useState([])
    const [count, setcount]=useState(0)

    function addToDoList(event){
        const storeTodoList=event.target.value
        setAddList(storeTodoList)

    }

    function submitToDoList(){
        const showToDoList=[...submitList,addList] ;
        setSubmitList(showToDoList);
        setcount(count +1)

    }
    function removeTaskList(){

    }

    return(
        <Fragment>
            <div>
                <h1> Pending Task ({count})</h1>
                {
                    submitList.map((ele,index)=>(
                        <ToDoList
                        task = {ele}
                        deleteFunction = {removeTaskList}
                        />
                    ))
                }


                <input
                onChange={addToDoList}
                placeholder ={"Add to the list"}
                />
                <br/>
                <button onClick={submitToDoList}>Submit </button>


            </div>



        </Fragment>
    )
}