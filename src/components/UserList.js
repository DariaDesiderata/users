import React from 'react';
import User from './User';
import { connect } from 'react-redux';
import { deleteUser, updateUser } from '../actions/actions';

class UserList extends React.Component {
  render() {
    return (
      <ul className="userList">
        {this.props.users.map(user =>
          <User
            key={user.id}
            user={user}
            onDelete={this.props.deleteUser.bind(this, user)}
            onUpdate={this.props.updateUser}
          />
        )}
      </ul>
    );
  }
}
const mapStateToProps = state => {
  return { users: state.users };
};
const mapDispatchToProps = {
  deleteUser,
  updateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
