import React, { useState } from 'react'

export default function FormModal({ displayForm, showForm }) {
    const cancelButtonHandler = () => {
        displayForm()
    }

    const [formValues, setFormValues] = useState({
        userName: '',
        email: '',
        password: '',
    })

    const registerFormValues = (event) => {
        console.log(event.target.value)
    }

    return (
        <div className={showForm ? "ui large active modal" : "ui large modal"}>
            <h1>Login / Register</h1>
            <form>
                <label>User Name:</label>
                <input
                    type="text"
                    placeholder="Enter User Name"
                    value={formValues.userName}
                    onChange={registerFormValues}
                />
                <label>E-Mail:</label>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={formValues.email}
                    onChange={registerFormValues}
                />
                <label>Password:</label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={formValues.password}
                    onChange={registerFormValues}
                />

            </form>
            <button onClick={cancelButtonHandler}>Cancel</button>
        </div>
    )
}
