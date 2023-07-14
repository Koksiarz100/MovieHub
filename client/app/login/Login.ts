import axios from 'axios';

export default async function Login(username: string, password: string) {

  const data = {
    username: username,
    password: password,
  };

  axios.post('http://localhost:5000/login', data)

  .then(response => {
    console.log('Response:', response.data);
    localStorage.setItem('token', response.data.token);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}