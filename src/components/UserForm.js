import React from "react";
import { FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";

const UserForm = ({ onSubmit }) =>
  <form className="container" onSubmit={onSubmit}>
    <h1>Add New User</h1>
    <FormGroup controlId="first_name">
      <FormControl type="text" name="first_name" />
    </FormGroup>
    <FormGroup controlId="last_name">
      <FormControl type="text" name="last_name" />
    </FormGroup>
    <FormGroup controlId="avatar">
      <FormControl
        type="text"
        name="avatar"
        value="https://pbs.twimg.com/profile_images/821309600678944768/oxUk52fY.jpg"
      />
    </FormGroup>
    <Button type="submit" color="primary">
      Save User
    </Button>
  </form>;

export default UserForm;
