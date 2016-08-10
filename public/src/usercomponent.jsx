'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

// A placeholder image if the user does not have one
const PLACEHOLDER = 'https://placeimg.com/60/60/people';

class UserComponent extends React.Component {
   
    render() {
        const user = this.props.user;
        
        if(!user.firstName) { user.firstName = "";}
        if(!user.lastName) { user.lastName = "";}
        
        if(!this.props.user.email){
            return <aside className="sidebar col col-3 flex flex-column flex-space-between">
                <ul className="flex flex-column flex-1 list-unstyled user-list">
                    <a className="block relative" href="#" />
                </ul>
            </aside>;
        }
        
        return <aside className="sidebar col col-3 flex flex-column flex-space-between">
            <ul className="flex flex-column flex-1 list-unstyled user-list">
                <a className="block relative" href="#">
                    <img src={PLACEHOLDER} className="avatar" />
                    <span className="absolute username">{user.firstName + " " + user.lastName}</span>
                </a>
            </ul>
        </aside>;
    }
};

module.exports = UserComponent;