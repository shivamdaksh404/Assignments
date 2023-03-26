import React from "react";
import "./UserCard.css";

export default function UserCard() {
  const personDetails = [
    {
      image:
        "https://web-screen.com/storage/screenshots/2023/03/151bcba9-2927-45c9-8c70-0a9ba04de032.png",
      name: "Shivam Daksh",
      profession: "Cyber Security Expert",
      experience: "5 years",
    },
    {
      image:
        "https://images.pexels.com/photos/3938465/pexels-photo-3938465.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Ankit Kumar",
      profession: "Digital Marketer",
      experience: "5 years",
    },
    {
      image:
        "https://web-screen.com/storage/screenshots/2023/03/d765a06b-cd6d-4179-83c0-11c541e30dd6.png",
      name: "Ravi Kumar",
      profession: "SDE",
      experience: "3 year",
    },
    {
      image:
        "https://web-screen.com/storage/screenshots/2023/03/a2eadf80-11a0-492c-9004-898fc3697718.png",
      name: "Santosh Yadav",
      profession: "Mechanical Engineer",
      experience: "5 Years",
    },
    {
      image:
        "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Nitin Kumar",
      profession: "Physiotherapist",
      experience: "2 Years",
    },
    {
      image:
        "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Aditya Kumar",
      profession: "C.A",
      experience: "3 Years",
    },
    {
      image:
        "https://web-screen.com/storage/screenshots/2023/03/6d2f629e-f141-4ace-9bcd-0a00d89828d4.png",
      name: "Vishal",
      profession: "SDE 2",
      experience: "4 Years",
    },
    {
      image:
        "https://images.pexels.com/photos/1998865/pexels-photo-1998865.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Preeti",
      profession: "Blogger",
      experience: "2 Years",
    },
    {
      image:
        "https://images.pexels.com/photos/5119214/pexels-photo-5119214.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Jyoti",
      profession: "Designer",
      experience: "5 Years",
    },
    {
      image:
        "https://images.pexels.com/photos/2589650/pexels-photo-2589650.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Naveen",
      profession: "Doctor",
      experience: "4 Years",
    },
    {
      image:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Prashant",
      profession: "M.B.B.S",
      experience: "3 Years",
    },
    {
      image:
        "https://images.pexels.com/photos/1466845/pexels-photo-1466845.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Sachin Kumar",
      profession: "Photographer",
      experience: "4 Years",
    },
    {
      image:
        "https://images.pexels.com/photos/7848986/pexels-photo-7848986.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Amit Saini",
      profession: "S.I",
      experience: "3 Years",
    },
  ];

  return (

    <div className="cardDetail">
      {personDetails.map((ele) => (
  
        <div className="card">
          <img className="img" src={ele.image} alt="" />
          <h1 className="name">Name :- {ele.name}</h1>
          <p className="profession">Profession :- {ele.profession}</p>
          <span className="experience">Experience :- {ele.experience}</span>
        </div>
  
      ))}
    </div>

  );
}
