import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => {
            //Checks if a token can be found on local storage. 
            if (localStorage.getItem('authToken')) {
                return <Component />;
                //If there is no valid token then redirect the user to the home page
            } else {
                return <Redirect to="/" />
            }
        }}
        />
    )
}

export default PrivateRoute;