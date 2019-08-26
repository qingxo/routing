import React from "react";
import { Link, Route, NavLink } from "react-router-dom";
import "./App.css";
const User = ({ match }) => <p>{match.params.id}</p>;

class Users extends React.Component {
  render() {
    console.log(this.props);
    const { params } = this.props.match;

    return (
      <div>
        <h1>Users</h1>
        <strong>select a user</strong>
        <ul>
          <li>
            <NavLink to="/users/1" activeClassName="active">
              User 1{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/users/2" activeClassName="active">
              User 2{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/users/3" activeClassName="active">
              User 3{" "}
            </NavLink>
          </li>
        </ul>
        <Route path="/users/:id" component={User} />
      </div>
    );
  }
}
export default Users;
