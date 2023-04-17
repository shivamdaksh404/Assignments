import React from 'react'
 import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import BillingFrom from './Assignments-6/BillingFrom'
import FetchData from './Assignment-7/FetchData'



export default function Routing() {
  return (
    <BrowserRouter>
    <Routes>
    <Route  path='/' element={<BillingFrom/>} />
    <Route  path='/fetchData' element={<FetchData/>} />
    
    </Routes>
    </BrowserRouter>    
  )
}
