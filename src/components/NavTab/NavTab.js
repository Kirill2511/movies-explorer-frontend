import React from 'react'
import './NavTab.css'

function NavTab() {
  return (
    <nav className="navtab">
      <ul className="navtab__list">
        <li className="navtab__list-item"><a className="navtab__list-link" href="#about">О проекте</a></li>
        <li className="navtab__list-item"><a className="navtab__list-link" href="#techs">Технологии</a></li>
        <li className="navtab__list-item"><a className="navtab__list-link" href="#me">Обо мне</a></li>
      </ul>
    </nav>
  )
}

export default NavTab
