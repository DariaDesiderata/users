import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  height: 300,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
};

const User = props => {
  return (
    <li>
      <Paper style={style} zDepth={3}>
        <p>
          Name: {props.firstName} {props.lastName}
        </p>
        <p>
          Street: {props.address.street}
        </p>
        <p>
          City: {props.address.city}
        </p>
        <p>
          State: {props.address.state}
        </p>
        <p>
          Country: {props.address.country}
        </p>
        <RaisedButton label="Update" primary={true} />
        <RaisedButton label="Delete" secondary={true} />
      </Paper>
    </li>
  );
};
export default User;
