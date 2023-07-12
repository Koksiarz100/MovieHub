'use client'

import Link from 'next/link'
import './nav.scss'

export default function Nav() {
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