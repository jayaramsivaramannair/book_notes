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

    const navigateLibrary = () => {
        history.push('/library')
        clearSearch()
    }

    //Clears the token from local storage when the user logs out
    const logoutUser = (evt) => {
        evt.preventDefault();
        localStorage.removeItem('authToken');
        history.push('/')
    }

    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
                <button onClick={navigateHome}>Home</button>
                <button onClick={navigateLibrary}>My Library</button>
                <button onClick={logoutUser}>LogOut</button>
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
