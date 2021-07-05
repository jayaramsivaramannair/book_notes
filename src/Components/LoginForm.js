import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

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

    return (
        <div>
            <h1>Login</h1>
            <button onClick={() => history.push('/')}>Return to Home</button>
            <form>
                <label>E-Mail:</label>
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

            </form>
            <button>Login</button>
        </div>
    )
}

export default LoginForm;
