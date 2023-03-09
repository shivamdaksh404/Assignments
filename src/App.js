import './App.css';
import Card from './User Card/Card';


function App() {
const userOne = {
  name:"Amit",
  designation:"Graphic Designer",
  description:"Highly creative and multi talented Graphic Designer with extensive experience in multimedia, marketing, and print design.",
  image:"https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
}
const userTwo = {
  name:"Ruhi",
  designation:"Singer",
  description:"perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays, 				and other types of music groups.",
  image:"https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
}
  
  return (
    <div className="App">
     <div>
      <Card
      image ={userOne.image}
      name={userOne.name} 
      description={userOne.description}
      designation={userOne.designation}
      />
      </div>
      <div>
      <Card
      image ={userTwo.image}
      name={userTwo.name} 
      description={userTwo.description}
      designation={userTwo.designation}
      />
       </div>
    </div>
    
  );
}

export default App;
