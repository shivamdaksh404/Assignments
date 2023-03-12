import {useState,Fragment} from 'react'
export function ChangeName(){
    const [name, setName] =useState()
    function changeName(){
        setName(name ==="Amit" ? "Shivam" : "Amit")
    }

    return (
        <Fragment>
            <h1>
               My Name is {name}     
            </h1>
            <button onClick={changeName}>
                Change Name 
            </button>
        </Fragment>
    )
}