import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';

export default function Home() {

    const history = useHistory()
    console.log(useLocation())

    const navigateDashboard = () => {
        history.push('/dashboard')
    }
    return (
        <div>
            <button onClick={navigateDashboard}>
                Dashboard
            </button>
            <p>This is the home page / landing page</p>
        </div>
    )
}
