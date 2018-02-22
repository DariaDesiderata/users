import React from 'react';
import User from './User';
import { connect } from 'react-redux';

class UserList extends React.Component {
  render() {
    return (
      <ul className="userList">
        {this.props.users.map(user => <User key={user.id} {...user} />)}
      </ul>
    );
  }
}
const mapStateToProps = state => ({
  users: state.users
});
const mapDispatchToProps = {
  // addUser,
  // deleteUser,
  // updateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
