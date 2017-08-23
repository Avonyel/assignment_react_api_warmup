import React, { Component } from "react";

const UserCard = ({ user }) => {
  const { first_name, last_name, avatar } = user;

  return (
    <div className="UserCard card" style={{ maxWidth: `128px` }}>
      <img
        className="card-img-top img-fluid"
        src={user.avatar}
        alt="user avatar"
      />
      <div className="card-block">
        <h4>
          {first_name} {last_name}
        </h4>
      </div>
    </div>
  );
};

export default UserCard;
