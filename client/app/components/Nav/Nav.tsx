import React from 'react'
import './nav.scss'

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="../">Movies</a>
        </li>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav