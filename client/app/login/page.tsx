'use client'

import { FormEvent, useEffect, useState } from 'react';
import './page.scss'
import { useRouter } from 'next/router';
import Login from './Login'

export default function page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    Login(username, password);
    const router = useRouter();

    useEffect(() => {
      if (localStorage.getItem('token')) {
        router.replace('/')
      }
    }, []);
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