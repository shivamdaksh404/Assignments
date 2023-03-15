import React, { useState } from 'react';

export default function App() {
  const [task, setTask] = useState([]);
  const [value, setValue] = useState('');
  const [count, setCount] = useState(0);
  
  function handleChange(event) {
    setValue(event.target.value);
    // console.log(event.target.value);
  }

  const handleSubmit = () => {
    const newTask = {
      id: new Date(),
      title: value,
      status: false,
    };
    setTask([...task, newTask]);
    setValue('');
    // if (value !== '') {
    setCount(count + 1);
    // } else {
    //   setCount(count);
    // }
  };
  const deleteTask = (id) => {
    task.forEach((ele) => {
      if (ele.id === id && ele.status === false) {
        setCount(count - 1);
      }
    });
    const filterData = task.filter((item) => item.id !== id);
    setTask(filterData);
  };
  const taskCompleted = (id) => {
    const updatedTask = task.map((item) => {
      if (item.id === id) {
        count > 0 && setCount(count - 1);
        return { ...item, status: !item.status };
      } else {
        return item;
      }
    });
    setTask(updatedTask);
    // if(id.status){
    //   setCount(count-1)
    // }
  };

  return (
    <div className='container'>
      <h1>Pending Task({count})</h1>
      <div>
        {task.map((ele, index) => (
          <div key={index} className='Single-data'>
            {ele.status ? (
              <p>
                <strike> {ele.title}</strike>{' '}
              </p>
            ) : (
              <p> {ele.title} </p>
            )}
            <div>
              <button onClick={() => taskCompleted(ele.id)}>Completed</button>
              <button className={"icon"} onClick={() => deleteTask(ele.id)}>X</button>
            </div>
          </div>
        ))}
      </div >
      <div className="input-part">
      <input value={value} placeholder="Add New Task" onChange={handleChange} />
      <button onClick={handleSubmit}>submit</button>
      {/* <GiCancel/> */}
      </div>
    </div>
  );
}
