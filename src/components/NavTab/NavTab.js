import React from 'react'
import './NavTab.css'

function NavTab() {
  return (
    <nav className="navtab">
      <ul className="navtab__list">
        {[
          { value: 'О проекте', href: '#about' },
          { value: 'Технологии', href: '#stack' },
          { value: 'Обо мне', href: '#me' },
        ].map(({ value, href }) => (
          <li key={value} className="navtab__list-item">
            <a href={href} className="navtab__list-link">
              {value}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavTab
