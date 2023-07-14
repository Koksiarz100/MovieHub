import axios from 'axios';

export default async function Login(username: string, password: string) {

  const data = {
    username: username,
    password: password,
  };

  axios.post('http://localhost:5000/auth', data)

  .then(response => {
    console.log('Response:', response.data);
    // Handle the response data here
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle any errors here
  });
}