// import logo from './logo.svg';
import './App.css';
import { ChangeName } from './useState/ChangeName';
import { IncreaseDecreaseCount } from './useState/IncreaseDecreaseCount';
import { TaskList } from './useState/TaskList';


function App() {
  return (
    <div className="App">

     <ChangeName/>
     <IncreaseDecreaseCount/>
     <br/>
     <br/>
     <TaskList/>
    </div>
  );
}

export default App;
