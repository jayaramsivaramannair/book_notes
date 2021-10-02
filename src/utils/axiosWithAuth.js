import axios from 'axios';

//https://fifty-two-book-notes.herokuapp.com/api

//This is a named export so it will be imported as an object property
export const axiosWithAuth = () => {
    const token = localStorage.getItem('authToken')
    return axios.create({
        baseURL: 'http://localhost:4000/api',
        headers: { Authorization: token }
    })
}