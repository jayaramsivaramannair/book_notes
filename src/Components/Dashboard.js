import React from 'react'
import { connect } from 'react-redux';
import { clearSearch } from '../actions/index'
import { useHistory, useLocation } from 'react-router-dom'

import Search from './Search.js'
import Results from './Results.js'

const Dashboard = ({ loading, clearSearch }) => {
    const history = useHistory()
    console.log(useLocation())

    const navigateHome = () => {
        history.push('/')
        clearSearch()
    }

    return (
        <div>
            <div>
                <button onClick={navigateHome}>Home</button>
            </div>
            <Search />
            {
                (loading) ?
                    <div className="ui active dimmer" style={{ backgroundColor: 'aliceblue' }}>
                        <div className="ui text loader" style={{ color: 'black' }}>Fetching Books...</div>
                    </div> : <Results />
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state.search.loading)
    return {
        loading: state.search.loading
    }
}

export default connect(mapStateToProps, { clearSearch })(Dashboard)
