import React from 'react'
import style from './style.module.css'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <header>
        <div className={style.headerLogo}>Characters</div>
        <ul className={style.navElems}>
            <Link to={"/home"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link>Contact</Link>
        </ul>
    </header>
  )
}

export default Index