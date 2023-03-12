import { Fragment, useState } from 'react'
export function TaskList() {

  const [data, setData] = useState([])
  const [list, setList] = useState("")

  function listAdd(event) {
    setList(event.target.value)
  }
  function toDoList() {
    setData([...data, list])
  }
  return (
    <Fragment>
      <h1>ENTER TODO LIST</h1>
      <input onChange={listAdd} />
      <button onClick={toDoList}>Add</button>
      <ul>
        {
          data.map((item) => <li>{item}</li>)
        }
      </ul>
    </Fragment>
  )
}

  