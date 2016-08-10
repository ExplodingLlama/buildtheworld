'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

class LoginArea extends React.Component {
    
    logout() {
        app.logout().then(() => window.location.href = '/index.html');
    }
    
    render() {
            if(!this.props.user.email){
                return <    div>
                    <a href="/login.html" className="button-primary">Login</a>
                    <a href="/signup.html" className="button-primary">Signup</a>
                </div>;
            }
            else {
                return <div>
                    <a href="#" className="logout button button-primary" onClick={this.logout}>Logout</a>
                </div>;
            }
        
    }
};

module.exports = LoginArea;