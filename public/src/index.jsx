'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import feathers from 'feathers-client';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

//Importing React Components
import LoginArea from './loginarea.jsx';
import UserComponent from './usercomponent.jsx';
import CardList from './cardlist.jsx';
import RichTextEditor from './richtexteditor.jsx';

// Establish a Socket.io connection
const socket = io();
//const socket = io.connect('https://buildtheworld-explodingllama.rhcloud.com:8443/', {'forceNew':true });
// Initialize our Feathers client application through Socket.io
// with hooks and authentication.
window.feathersApp = feathers()
    .configure(feathers.socketio(socket))
    .configure(feathers.hooks())
    // Use localStorage to store our login token
    .configure(feathers.authentication({
        storage: window.localStorage
    }));

const app = window.feathersApp;

const BTWApp = React.createClass ({

    getInitialState() {

        return {
            user: [],
            cards: []
        };
    },

    componentDidMount() {

        const userService = app.service('users');
        const feedService = app.service('feeds');

        userService.find().then(userList => this.setState({user: userList.data[0]})).catch(() => {});
        feedService.find().then(feedOutput => this.setState({cards: feedOutput.data}));
    },

    render() {

        return <div id="app" className="flex flex-column">
            <header className="title-bar flex flex-row flex-center">
                <LoginArea user={this.state.user} />
                <div className="title-wrapper block center-element">
                    <span className="title">Build the World</span>
                </div>
            </header>
            <div className="flex flex-row flex-1 clear">
                <UserComponent user={this.state.user} />
                <div className="flex flex-column col col-9">
                    <CardList cards={this.state.cards} />
                </div>
                <div className="flex flex-column col col-9">
                    <RichTextEditor />
                </div>
            </div>
        </div>
    }

});

const makepage = function() {
    ReactDOM.render(
      <Router history={hashHistory}>
        <Route path="/" component={BTWApp}/>
      </Router>,
      document.getElementById('container'));
}

app.authenticate().then(makepage).catch(() => {console.log("Not logged into the website"); makepage();});
