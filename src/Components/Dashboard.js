import React from 'react'

import Search from './Search.js'
import Results from './Results.js'

export default function Dashboard({ assignResults, setLoading, loading, bookResults }) {
    return (
        <div>
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
