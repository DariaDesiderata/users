import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { connect } from 'react-redux';
import { addUser } from '../actions/actions';

const style = {
  position: 'absolute',
  top: '90vh',
  left: '90vw'
};
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">User List</h1>
          </header>
          <UserList />
          <FloatingActionButton style={style} onClick={this.props.addUser}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
      </MuiThemeProvider>
    );
  }
}
const mapStateToProps = () => {};
const mapDispatchToProps = {
  addUser
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
