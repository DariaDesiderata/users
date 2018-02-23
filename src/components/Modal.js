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
export default class Modal extends React.Component {
  state = {
    open: false,
    updatedUser: {}
  };

  componentDidMount() {
    this.setState({ updatedUser: this.props.user });
  }

  get fields() {
    const user = this.state.updatedUser;
    return Object.keys(user)
      .slice(1)
      .map(key =>
        <TextField
          style={textFieldStyle}
          key={key}
          value={user[key]}
          name={key}
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
  handleSubmit = () => {
    this.props.onUpdate(this.state.updatedUser);
    this.handleClose();
  };
  render() {
    const {
      firstName,
      lastName,
      street,
      city,
      state,
      country,
      onDelete
    } = this.props.user;

    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
      <FlatButton label="Submit" onClick={this.handleSubmit} primary={true} />
    ];
    return (
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
    )
  }
}
