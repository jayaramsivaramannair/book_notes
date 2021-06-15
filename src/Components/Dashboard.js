import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import Search from './Search.js'
import Results from './Results.js'

export default function Dashboard({ assignResults, setLoading, loading, bookResults }) {
    const history = useHistory()
    console.log(useLocation())

    const navigateHome = () => {
        history.push('/')
    }

    return (
        <div>
            <div>
                {/* 
                    <Link to="/">Home</Link> One Approach for navigation
                */}
                <button onClick={navigateHome}>Home</button>

            </div>
            <Search assignResults={assignResults} setLoading={setLoading} loading={loading} />
            {
                (loading) ?
                    <div className="ui active dimmer" style={{ backgroundColor: 'aliceblue' }}>
                        <div className="ui text loader" style={{ color: 'black' }}>Fetching Books...</div>
                    </div> : <Results bookResults={bookResults} loading={loading} />
            }
        </div>
    )
}
