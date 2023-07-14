'use client'

import Link from 'next/link'
import './nav.scss'

/*
  Nav Component:
    This is the component that will be used to display the navigation bar on the home page.

  TODO:
    ! Make it responsive
    * Add controls for mobile
*/

export default function Nav() {
  return (
    <nav>
      <div className='nav-logo'>
        <Link href="../">MovieHub</Link>
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