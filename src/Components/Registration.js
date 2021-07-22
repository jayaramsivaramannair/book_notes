import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';


const Registration = (props) => {
    const initialFormValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
    const [formValues, setFormValues] = useState(initialFormValues)

    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const history = useHistory()

    const registerFormValues = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value })
        console.log(formValues)
    }

    const submitForm = (evt) => {
        evt.preventDefault()
        const userData = {
            username: formValues.username,
            email: formValues.email,
            password: formValues.password,
        }

        axios.post("https://fifty-two-book-notes.herokuapp.com/api/register", userData)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })

        setFormValues(initialFormValues)
    }


    return (
        <div>
            {
                (loading) ?
                    <div className="ui active dimmer" style={{ backgroundColor: 'aliceblue' }}>
                        <div className="ui text loader" style={{ color: 'black' }}>In Progress...</div>
                    </div> :
                    <div>
                        <h2>Registration</h2>
                        <button onClick={() => history.push('/')}>Return to Home</button>
                        <form onSubmit={submitForm}>
                            <label >Username:</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Enter Username"
                                value={formValues.username}
                                onChange={registerFormValues}
                            />
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
                            <label>Confirm Password:</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Re-enter your password"
                                value={formValues.confirmPassword}
                                onChange={registerFormValues}
                            />
                            <button>Register</button>
                        </form>
                        {(message) ? <p>{message}</p> : ''}
                    </div>
            }
        </div>
    )
}

export default Registration