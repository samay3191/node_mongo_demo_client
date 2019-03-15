import React, { Component } from 'react';
import ShowUsers from '../src/components/ShowUsers.jsx';
import AddUser from '../src/components/AddUser.jsx';

class App extends Component {
  render() {
    return (
      <div className="Container">
        <h2>React Client for Node API</h2>
        <ShowUsers/>
        <AddUser/>
        <br/>
      </div>
    );
  }
}

export default App;
