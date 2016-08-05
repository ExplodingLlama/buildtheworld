// A placeholder image if the user does not have one
const PLACEHOLDER = 'https://placeimg.com/60/60/people';
// An anonymous user if the message does not have that information
const dummyUser = {
  avatar: PLACEHOLDER,
  email: 'Anonymous'
};

// Establish a Socket.io connection
//const socket = io();
const socket = io.connect('https://buildtheworld-explodingllama.rhcloud.com:8443/', {'forceNew':true });
// Initialize our Feathers client application through Socket.io
// with hooks and authentication.
const app = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.hooks())
  // Use localStorage to store our login token
  .configure(feathers.authentication({
    storage: window.localStorage
  }));

const LoginButton = React.createClass ({
    
    logout() {
        app.logout().then(() => window.location.href = '/index.html');
    },
    
    render() {
            if(!this.props.user.email){
                return <div>
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
})

const UserComponent = React.createClass ({
   
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
});

const CardList = React.createClass({
    //Render a single card
    renderCard(card) {
        const owner = card.ownerId || "Anonymous";
        
        return <div className="message flex flex-row">
            <div className="message-wrapper">
                <p className="message-header">
                    <span className="username font-600">{owner}</span>
                </p>
                <p className="message-content font-300">
                    {card.data}
                </p>
            </div>
        </div>;
    },
    
    render() {
        return <main className="chat flex flex-column flex-1 clear">
            {this.props.cards.map(this.renderCard)}
        </main>;
    }
});

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
                <LoginButton user={this.state.user} />
                <div className="title-wrapper block center-element">
                    <span className="title">Build the World</span>
                </div>
            </header>
            <div className="flex flex-row flex-1 clear">
                <UserComponent user={this.state.user} />
                <div className="flex flex-column col col-9">
                    <CardList cards={this.state.cards} />
                </div>
            </div>
        </div>
    }
    
});

const makepage = function() {
    ReactDOM.render(<BTWApp />,document.getElementById('container'));
    
}


app.authenticate().then(makepage).catch(() => {console.log("Not logged into the website"); makepage();});


