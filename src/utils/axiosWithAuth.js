import axios from 'axios';

//This is a named export so it will be imported as an object property
export const axiosWithAuth = () => {
    const token = localStorage.getItem('authToken')
    return axios.create({
        baseURL: 'https://fifty-two-book-notes.herokuapp.com/api',
        headers: { Authorization: token }
    })
}