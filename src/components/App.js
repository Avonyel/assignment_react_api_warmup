import React, { Component } from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";
import serialize from "form-serialize";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      isFetching: false
    };
  }

  componentDidMount() {
    this.setState({ isFetching: true });
    fetch("https://reqres.in/api/users?delay=3")
      .then(response => response.json())
      .then(json => {
        this.setState({
          users: json.data,
          isFetching: false
        });
      });
  }

  onAddUser = e => {
    e.preventDefault();
    const form = e.target;
    const body = serialize(form, { hash: true });

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    // Set options, and stringify the body to JSON
    const options = {
      headers,
      method: "POST",
      body: JSON.stringify(body)
    };

    // Before performing the fetch, set isFetching to true
    this.setState({ isFetching: true });

    fetch("https://reqres.in/api/users", options)
      .then(response => {
        // If response not okay, throw an error
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        // Otherwise, extract the response into json
        return response.json();
      })
      .then(json => {
        // Update the user list and isFetching.
        // Reset the form in a callback after state is set.
        this.setState(
          {
            isFetching: false,
            users: [...this.state.users, json]
          },
          () => {
            form.reset();
          }
        );
      })
      .catch(error => {
        // Set error in state & log to console
        console.log(error);
        this.setState({
          isFetching: false,
          error
        });
      });
  };

  render() {
    const { users, isFetching } = this.state;

    return (
      <div className="App">
        <UserForm onSubmit={this.onAddUser} />
        <UserList users={users} isFetching={isFetching} />
      </div>
    );
  }
}

export default App;
