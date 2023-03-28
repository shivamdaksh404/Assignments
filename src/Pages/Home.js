import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import style from './Home.module.css'

export default function Home() {
  return (
    <div>
    
    <NavBar/>
    <h1 className={style.heading}>This Is the Home Page</h1>
    
    
    </div>
  )
}
