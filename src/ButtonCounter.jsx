import React from "react";
import { useDispatch } from "react-redux";
import {buttonSlice} from './reducers'
import { useSelector } from "react-redux";
import style from './ButtonCounter.module.css'

function Button() {
  const data = useSelector((state) => state.buttons);
  const buttons = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
  ];
  const dispatch = useDispatch();
  const handleClick = (value) => {
    const obj = {
      char: value,
      count: 0,
    };
    dispatch(buttonSlice.actions.addButtoncount(obj));
  };

  return (
    <div>
      {buttons.map((value, index) => {
        return (
          <button className={style.btnBtn} key={index} onClick={() => handleClick(value)}>
            {value}
          </button>
        );
      })}

      <table className={style.table}>
        <thead>
          <tr>
            <th>Buttons</th>
            <th>Click Counts</th>
          </tr>
        </thead>
        <tbody>
          {data.map((char) => {
            return (
              <tr>
                <td>{char.char}</td>
                <td>{char.count}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Button;