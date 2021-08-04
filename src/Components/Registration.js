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
        setLoading(true)
        const userData = {
            username: formValues.username,
            email: formValues.email,
            password: formValues.password,
        }

        axios.post("https://fifty-two-book-notes.herokuapp.com/api/register", userData)
            .then((response) => {
                console.log(response)
                setMessage(response.data.message)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })

        setFormValues(initialFormValues)
    }


    return (
        <div>
            <h2>Registration</h2>
            <button onClick={() => history.push('/')}>Return to Home</button>
            <form onSubmit={submitForm} className="register-form">
                <div className="form-inputs">
                    <label >Username:</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        value={formValues.username}
                        onChange={registerFormValues}
                    />
                </div>
                <div className="form-inputs">
                    <label >E-Mail:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formValues.email}
                        onChange={registerFormValues}
                    />
                </div>
                <div className="form-inputs">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={formValues.password}
                        onChange={registerFormValues}
                    />
                </div>
                <div className="form-inputs">
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Re-enter your password"
                        value={formValues.confirmPassword}
                        onChange={registerFormValues}
                    />
                </div>
                <button className={`ui primary ${(loading) ? 'loading' : ''} button`}>Register</button>
            </form>
            {
                (message) ? 
                <div>
                    <h6>Registration Success:</h6>
                    {(message) && <p style={{textAlign: 'left'}}>{message}</p>}
                </div> : ''
            }
        </div>
    )
}

export default Registration