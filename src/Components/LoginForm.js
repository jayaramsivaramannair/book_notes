import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const LoginForm = (props) => {
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    })

    const history = useHistory()

    const registerFormValues = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value })
        console.log(formValues)
    }

    const submitForm = (evt) => {
        evt.preventDefault()
        console.log(formValues)
        axios.post("https://fifty-two-book-notes.herokuapp.com/api/login", formValues)
            .then((res) => {
                console.log(res.data)
                //Waits for the response to come in and then sets the token on localStorage
                localStorage.setItem('authToken', res.data.token)
                history.push('/dashboard')
            })
            .catch((err) => {
                console.log(err)
            })
        setFormValues({ ...formValues, email: '', password: '' })
    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={() => history.push('/')}>Return to Home</button>
            <form onSubmit={submitForm}>
                <label >E-Mail:</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formValues.email}
                    onChange={registerFormValues}
                />
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={formValues.password}
                    onChange={registerFormValues}
                />
                <button>Login</button>
                <button>Don't have an account? Click Here to Register!</button>
            </form>
        </div>
    )
}

export default LoginForm;
