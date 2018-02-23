import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Modal from './Modal';

const style = {
  height: 300,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
};

export default class User extends React.Component {
  state = {
    open: false
  };
  toggleModal = value => {
    this.setState({ open: value });
  };

  render() {
    const {
      firstName,
      lastName,
      street,
      city,
      state,
      country
    } = this.props.user;
    return (
      <li>
        <Paper style={style} zDepth={3}>
          <div className="userDetails">
            <p>
              Name: {firstName} {lastName}
            </p>
            <p>
              Street: {street}
            </p>
            <p>
              City: {city}
            </p>
            <p>
              State: {state}
            </p>
            <p>
              Country: {country}
            </p>
          </div>
          <RaisedButton
            className="actionButton"
            label="Update"
            primary={true}
            onClick={this.toggleModal.bind(this, true)}
          />
          <Modal
            user={this.props.user}
            onUpdate={this.props.onUpdate}
            open={this.state.open}
            toggleModal={this.toggleModal}
          />

          <RaisedButton
            className="actionButton"
            label="Delete"
            secondary={true}
            onClick={this.props.onDelete}
          />
        </Paper>
      </li>
    );
  }
}
