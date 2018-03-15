//Higher Order Component - HOC are component (HOC) that renders another component
//Reuse code
//Render Hijacking
//Props manipulation
//Abstract State

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>Confidential info</p>}
            <WrappedComponent {...props}/>
        </div>
    )
};

//a regular function that returns a higher order component
const requireAuthentication = (WrappedComponent) => {
    //This div is a HOC
    //WrappedComponent is the normal component
    return (props) => (
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props}/>) : (<p>Not Authenticated </p>)}
             
        </div>
    )
}


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info='This is the detail' />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info='This is the detail' />, document.getElementById('app'))