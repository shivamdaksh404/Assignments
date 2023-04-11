import React, { useState } from "react";

export default function Greetings() {
  const [greeting, setGreeting] = useState(0);
  const greetingArray = [
    "Happy Birthday",
    "Happy Anniversary",
    "Happy New Year",
    "Happy Diwali",
    "Happy Holi",
  ];

  const GreetingChange = () => {
    setGreeting(greeting === greetingArray.length - 1 ? 0 : greeting + 1);
    console.log(greeting);
  };

  return (
    <div>
      <button onClick={GreetingChange}> Greeting</button>
      <h1>{greetingArray[greeting]}</h1>
    </div>
  );
}
