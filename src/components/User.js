import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

const style = {
  height: 300,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
};
const textFieldStyle = {
  width: '95%',
  margin: 5
};
export default class User extends React.Component {
  state = {
    open: false,
    updatedUser: {}
  };

  componentDidMount() {
    this.setState({ updatedUser: this.props.user });
  }

  get fields() {
    return Object.entries(this.state.updatedUser)
      .slice(1)
      .map(field =>
        <TextField
          style={textFieldStyle}
          key={field[1]}
          value={field[1]}
          name={field[0]}
          onChange={this.handleChange}
        />
      );
  }

  handleChange = event => {
    this.setState({
      updatedUser: {
        ...this.state.updatedUser,
        [event.target.name]: event.target.value
      }
    });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const {
      firstName,
      lastName,
      street,
      city,
      state,
      country,
      onUpdate,
      onDelete
    } = this.props.user;
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
      <FlatButton
        label="Submit"
        onSubmit={onUpdate}
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />
    ];
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
            onClick={this.handleOpen}
          />
          <Dialog
            actions={actions}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            <div className="updateUserDialog">
              {this.fields}
            </div>
          </Dialog>

          <RaisedButton
            className="actionButton"
            label="Delete"
            secondary={true}
            onClick={onDelete}
          />
        </Paper>
      </li>
    );
  }
}
