import React, { Fragment, useState } from "react";

export default function EventsHandle() {
  const [data, setData] = useState([]);
  const date = new Date().toLocaleString();

  const handleMouseIn = () => {
    setData([...data, { time: date, event: "Mouse In" }]);
  };

  const handleMouseOut = () => {
    setData([...data, { time: date, event: "Mouse Out" }]);
  };

  return (
    <Fragment>
      <h1 style={{display:"inline"}} onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
        This is Heading One
      </h1>
      <h2> This is Heading Two </h2>
      <div>This Is Div </div>
      <br />

      <table border="1px" cellPadding="10px" cellSpacing="10px">
        <thead>
          <tr>
            <th>Time</th>
            <th>Event</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, index) => {
            return (
              <tr key={index}>
                <th>{ele.time}</th>
                <th>{ele.event} </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
}
