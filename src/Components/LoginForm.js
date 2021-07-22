import React, { useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { saveLoginDetails } from '../actions'

const LoginForm = ({ saveLoginDetails }) => {
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    })

    const [loading, setLoading] = useState(false)

    const history = useHistory()

    const registerFormValues = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value })
        console.log(formValues)
    }

    const submitForm = (evt) => {
        evt.preventDefault()
        setLoading(true)
        axios.post("https://fifty-two-book-notes.herokuapp.com/api/login", formValues)
            .then((response) => {
                localStorage.setItem('authToken', response.data.token)
                console.log(response.data)
                saveLoginDetails(response.data)
                setLoading(false)
                history.push('/dashboard')
            })
            .catch((err) => {
                console.log(err)
            })
        setFormValues({ ...formValues, email: '', password: '' })
    }
    return (
      
    
        <div>
            <button onClick={() => history.push('/')}>Return to Home</button>
            <h2>Login</h2>
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
                <button onClick={()=> history.push('/register')}>Don't have an account? Click Here to Register!</button>
            </form>
            {
                (loading) ? 
                <div className="ui active dimmer" style={{ backgroundColor: 'aliceblue' }}>
                    <div className="ui text loader" style={{ color: 'black' }}>Hold On Tight</div>
                </div> : " "
            }
        </div>
    )
}

export default connect(null, { saveLoginDetails })(LoginForm)
