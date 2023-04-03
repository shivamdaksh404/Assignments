
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LuckyNumber from './Pages/Game/LuckyNumber'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Quiz from './Components/Quiz/Quiz.js'

export default function Routing(){

    return (
        <div> 
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/quiz' element={<Quiz/>} />
        <Route path='/game' element={<LuckyNumber/>} />
        </Routes>
        
        </BrowserRouter>
        </div>
    )
}