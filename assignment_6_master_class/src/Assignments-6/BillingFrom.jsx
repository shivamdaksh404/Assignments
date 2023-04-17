import { useState } from "react";
import style from "./Billing.module.css";

function BillingFrom() {
  const d = new Date();
  const date = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();
  const fulldate = date + "-" + (month + 1) + "-" + year;

  let sum = 0;
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [isbill, setIsbill] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([
      ...data,
      {
        product: product,
        quantity: quantity,
        price: Math.floor(Math.random() * 100),
      },
    ]);
  };

  const handeleChangeproduct = (e) => {
    setProduct(e.target.value);
  };

  const handelChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handelChangename = (e) => {
    setName(e.target.value);
  };

  const handelCreateBill = () => {
    setIsbill(true);
  };

  const handelClosebill = () => {
    setIsbill(false);
  };

  return (
    <div className={style.main}>
    <div>

    
      <div className={style.costumerDiv}>
        <h1>Billing From</h1>
        Costumer Name :{" "}
        <input
          className={style.nameInput}
          type="text"
          placeholder="Costumer Name"
          onChange={handelChangename}
        />
      </div>
      <div className={style.itemListDiv}>
        <h1>Seleted Item List</h1>
        <form className={style.from} onSubmit={handleSubmit}>
          <div className={style.inputDiv}>
            <b>Select Product</b> :{" "}
            <select name="" id="" onChange={handeleChangeproduct}>
              <option value="">Select</option>
              <option value="Sugar">Sugar</option>
              <option value="Oats">Oats</option>
              <option value="Cofee">Cofee</option>
              <option value="Snaks">Snacks</option>
            </select>
          </div>
          <div className={style.inputDiv}>
            <b>Select Quantity</b> :{" "}
            <input
              onChange={handelChangeQuantity}
              type="text"
              placeholder="Quantity"
            />
          </div>
          {/**
          <button type="submit">Add More Item</button>
         */}
        </form>
      
        {data.map((ele) => {
          return (
            <div className={style.divContainer}>
              <div className={style.inputDiv}>
                <b>Select Product</b> :{" "}
                <select name="" id="" onChange={handeleChangeproduct}>
                  <option value="">Select</option>
                  <option value="Sugar">Sugar</option>
                  <option value="Oats">Oats</option>
                  <option value="Cofee">Cofee</option>
                  <option value="Snaks">Snacks</option>
                </select>
              </div>

              <div className={style.inputDiv}>
                <b>Select Quantity</b> :{" "}
                <input
                  onChange={handelChangeQuantity}
                  type="text"
                  placeholder="Quantity"
                />
              </div>
            </div>
          );
        })}
        <button className={style.createBillBtn} onClick={handleSubmit}>Add More Item</button>
      </div>
      </div>
      <button className={style.createBillBtn} onClick={handelCreateBill}>
        Create Bill
      </button>

      {/*-----------------Bill Selection---------------- */}
<div className={style.billBox}>
  
      {isbill && (
        <div>
        <hr />
          <h4>Customer Name: {name}</h4>

          <h4>Date: {fulldate}</h4>

          {/* //data also */}

          <table 
         
          >
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => {
                return (
                  <tr>
                    <td>{item.product}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{+item.quantity * item.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className={style.sumDiv}>
            <p>Total</p>

            <b>
              {data.forEach((ele) => {
                sum += ele.price * +ele.quantity;
              })}

              {sum}
            </b>
          </div>

          <span  style={{color:"blue", cursor: "pointer"
}} 
           onClick={handelClosebill}>close bill</span>
        </div>
      )}
</div>
    </div>
  );
}

export default BillingFrom;
