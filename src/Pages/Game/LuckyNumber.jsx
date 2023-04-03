import { Fragment,  useRef, useState } from "react";
import NavBar from "../../Components/navBar/NavBar";
import style from './LuckyNumber.module.css'

export default function LuckyNumber() {
  const [value, setValue] = useState();
  const [count, setCount] = useState(0);
  const totalClick = useRef(1);
  const number= useRef(Math.floor(Math.random()*100));


  const handleValue = (event) => {
    setValue(event.target.value);
    console.log(value);
  };
  
  const handleMatch = () => {
    setCount(count + 1);
    console.log("this is Number", number);
    
    if (number.current > value) {
      return alert("You Guess Smaller Number");
    } else if (number.current < value) {
      return alert(`You Guess Bigger Number`);
    } else {
      return alert(
        `You Guess the Right Number in ${totalClick.current + count} click. You Are the genius`
        );
      }
  };

  return (
    <Fragment>
    <NavBar/>
      <div className={style.mainContainer}>
      <div className={style.container}>
      <h1 className={style.matchHeading} > Guess the Lucky Number</h1>
      <input
      onChange={handleValue}
      className={style.input}
      type="number"
      placeholder="Matching Number..."
      />
      <button className={style.btn} onClick={handleMatch}>
      Match
      </button>
      <h4 className={style.tryTimes} >You are try {count} times</h4>
      </div>

      </div>
    </Fragment>
  );
}
