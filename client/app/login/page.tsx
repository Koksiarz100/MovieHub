'use client'

import { FormEvent, useState } from 'react';
import './page.scss'
import { redirect } from 'next/navigation';
import Login from './Login'

function tokenCheck() {
  if (typeof localStorage !== 'undefined') {
    const token = localStorage.getItem('token');
    if (!token) {
      redirect('/login');
    }
    else {
      redirect('../');
    }
  }
}

export default function page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (typeof localStorage !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      redirect('../');
    }
  }
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    Login(username, password);
    tokenCheck();
  }

  return (
    <div className='login-wrapper'>
      <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <button type="submit">Login</button>
    </form>
    </div>
  )
}