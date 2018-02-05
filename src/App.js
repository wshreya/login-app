import React, { Component } from 'react';
import './App.css';
import Login from './components/login';
import Dashboard from './components/dashboard';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
       emailId: "shreya@atos.net",
       password: "admin",
       message:''
    }
    this.updateMessage = this.updateMessage.bind(this);
    console.log('here');
 }

 updateMessage(newMessage) {
   this.setState({message:newMessage});
 }

  render() {
    return (
      <div className="App">
      <BrowserRouter>
            <div>
               <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/dashboard' component={Dashboard} />
               </Switch>
            </div>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
