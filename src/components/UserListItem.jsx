import React from 'react';

const UserListItem = ({ userData }) => {
  return (
    <div className="listItem">
      <span className="itemID">{userData.id}</span>
      <span className="itemUsername">{userData.username}</span>
      <span className="itemEmail">{userData.email}</span>
    </div>
  );
};

export default UserListItem;
