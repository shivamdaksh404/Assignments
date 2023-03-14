import { Fragment, useState } from 'react'

export function ToDoList(props) {
    const [isCompleted, setIsCompleted] = useState(false)

    const strikeThrough = {
        color: "red"

    }


    return (
        <Fragment>
            <div className='taskList'>
                <p className='para' style={isCompleted ? strikeThrough : {}}> {props.task}</p>
                <div className='buttonContainer'>
                <button onClick={() => setIsCompleted(true)}> Completed</button>
                <icon s />
                </div>
            </div>



        </Fragment>
    )
}