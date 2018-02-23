import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

const textFieldStyle = {
  width: '95%',
  margin: 5
};
export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      updatedUser: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.setState({ updatedUser: this.props.user, open: this.props.open });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.open });
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

  handleClose = () => {
    this.props.toggleModal(false);
  };

  handleSubmit = () => {
    this.props.onUpdate(this.state.updatedUser);
    this.props.toggleModal(false);
  };
  render() {
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
      <FlatButton label="Submit" onClick={this.handleSubmit} primary={true} />
    ];
    return (
      <React.Fragment>
        <Dialog
          actions={actions}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <div className="updateUserDialog">
            {this.fields}
          </div>
        </Dialog>
      </React.Fragment>
    );
  }
}
