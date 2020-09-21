import React, { Component } from "react";
import { getAllUsers } from "../../services/userService";
import { Link } from 'react-router-dom';

class Users extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const users = await getAllUsers();
    this.setState({ users });
  }

  render() {
    return (
      <>
        <h1>Hello. This is a list of all the users.</h1>
        {this.state.users.map((user) => (
          <Link
            key={user.id}
            to={{
              pathname: `profile/${user._id}`,
            }}
          ><p>{user.name}</p></Link>
        ))}
      </>
    );
  }
}

export default Users;