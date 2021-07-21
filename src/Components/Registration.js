import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';


const Registration = (props) => {
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    })

    const [loading, setLoading] = useState(false)

    const history = useHistory()

    const registerFormValues = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value })
        console.log(formValues)
    }

    const submitForm = (evt) => {
        evt.preventDefault()
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
                    </div>
            }
        </div>
    )
}

export default Registration