import axios from 'axios'



// const baseURL = 'https://red-onion-server-six.vercel.app/'
const baseURL = 'http://localhost:5000/'
// const baseURL = 'server-URL'

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

const token = localStorage.getItem('token');

if (token) {
    headers.Authorization = `Bearer ${token}`;
}

//creating an axios instance with some basic configuration.
export const axiosInstance = axios.create({
    baseURL,
    headers
})