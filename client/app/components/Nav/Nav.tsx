import React from 'react'
import Link from 'next/link'
import './nav.scss'

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="../">Movies</Link>
        </li>
        <li>
          <Link href="../">Series</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav