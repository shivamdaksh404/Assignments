import './App.css';
import { Heading } from './Heading';
import { Input } from './Input';
import { Button } from './Button';

function App() {
  return (
    <div className="App" >
      {/* <h1> Register here ...</h1>
   
      <input type="text" placeholder="mobile..." />
      <br/>
      <input type="text" placeholder="password..." />
    <br/>
    <button className='Button'> Submit </button> */}

     
<Heading name="Register Here..." />
<Input />
<br/>
<Button name="Submit" className='Button' />
    </div>
    
  );
}

export default App;
