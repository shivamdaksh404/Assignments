import './App.css';
import UserCard from './Components/UserCard';

function App() {



  return (
    <div className="App">
    <div >
    <h1>Know Your Friends</h1>
    <p className='description'>Work with a mentor (senior data scientists from to companies) who closely looks at your progress, give you personalized feedback and helps you fill gaps in your knowledge</p>
    </div>
    <UserCard/>
    </div>
  );
}

export default App;
