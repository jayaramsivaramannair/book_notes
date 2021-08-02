import React, { useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { saveLoginDetails } from '../actions'
import useForm from '../useForm.js'


const LoginForm = ({ saveLoginDetails }) => {
    const {handleChange, values, setValues} = useForm()

    const [loading, setLoading] = useState(false)

    const history = useHistory()

    const submitForm = (evt) => {
        evt.preventDefault()
        setLoading(true)
        axios.post("https://fifty-two-book-notes.herokuapp.com/api/login", values)
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
        setValues({...values, email: '', password: ''})
    }
    return (
      
    
        <div>
            <button onClick={() => history.push('/')}>Return to Home</button>
            <h2>Login</h2>
            <form onSubmit={submitForm}>
                <div className="form-inputs">
                    <label >E-Mail:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-inputs">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={values.password}
                        onChange={handleChange}
                    />
                </div>
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
