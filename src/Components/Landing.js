import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import FormModal from './FormModal.js'

function Landing() {

    const history = useHistory()

    const [showForm, setShowForm] = useState(false)
    console.log(useLocation())

    const navigateDashboard = () => {
        history.push('/dashboard')
    }

    const displayForm = () => {
        setShowForm(false)
    }

    return (
        <div className="wrapper">
            <header className="header" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <h1>One Fifty Two</h1>
                <button onClick={navigateDashboard}>
                    Dashboard
                </button>
                <button onClick={(e) => setShowForm(true)}>
                    Login / Register
                </button>
            </header>
            <section className="main" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className="firstPanel"></div>
                <div className="secondPanel">
                    <h2>Welcome to One-Fifty Two</h2>
                    <h4>A Place to create your online knowledge repository</h4>
                    <ul>
                        <li>track the books you are reading by adding them to your online library</li>
                        <li>Add your reading notes for each book</li>
                        <li>Share your reading notes by tweeting them</li>
                    </ul>
                </div>
            </section>
            {/* A place for adding carousel*/}
            {/* form should be set up using a modal */}
            {
                showForm ? <FormModal displayForm={displayForm} showForm={showForm} /> : null
            }

            <footer className="footer"><h5>&copy; One-Fifty-Two</h5></footer>
        </div>
    )
}

export default Landing
