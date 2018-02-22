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
  const { firstName, lastName, address, onUpdate, onDelete } = props;
  return (
    <li>
      <Paper style={style} zDepth={3}>
        <p>
          Name: {firstName} {lastName}
        </p>
        <p>
          Street: {address.street}
        </p>
        <p>
          City: {address.city}
        </p>
        <p>
          State: {address.state}
        </p>
        <p>
          Country: {address.country}
        </p>
        <RaisedButton label="Update" primary={true} onClick={onUpdate} />
        <RaisedButton label="Delete" secondary={true} onClick={onDelete} />
      </Paper>
    </li>
  );
};
export default User;
