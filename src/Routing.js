import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './Pages/About'
import Home from  './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'

export default function Routing(){

    return(
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />

        </Routes>

        </BrowserRouter>
    )
}