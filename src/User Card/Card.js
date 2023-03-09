import { Fragment } from 'react';
import './Card.css';

function Card(props) {
    return (
        <Fragment>
            <div className='card'>
                <div className ="container">  
                    <img src={props.image} alt="userImage" style={{height:"100px", width:"100px", borderRadius:"50%" }}/>
                    <h5 >{props.designation}</h5>
                    <h1 > {props.name} </h1>
                    <p>{props.description}</p>

                </div>
            </div>
        </Fragment>
    )
};
export default Card