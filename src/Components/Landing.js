import React from 'react'
import { useHistory } from 'react-router-dom';

function Landing() {

    const history = useHistory()

    const navigateDashboard = () => {
        history.push('/dashboard')
    }

    const navigateLogin = () => {
        history.push('/login')
    }

    return (
        <div className="wrapper">
            <header className="header" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr' }}>
                {/*
                <button onClick={navigateDashboard}>
                    Dashboard
                </button>
                */}
                <button onClick={navigateLogin}>
                    Login
                </button>
            </header>
            <section className="main" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr' }}>
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
            <footer className="footer"><h5>&copy; One-Fifty-Two</h5></footer>
        </div>
    )
}

export default Landing
