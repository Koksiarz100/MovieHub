'use client'

import Link from 'next/link'
import './nav.scss'

export default function Nav() {
  return (
    <nav>
      <div className='nav-logo'>
        MovieHub
      </div>
      <div className='nav-links'>
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
      </div>
    </nav>
  )
}