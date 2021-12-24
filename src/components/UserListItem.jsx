import React from 'react';

const UserListItem = ({ data }) => {
  return (
    <div className="listItem">
      <span className="itemID">1</span>
      <span className="itemUsername">username</span>
      <span className="itemEmail">Email</span>
    </div>
  );
};

export default UserListItem;
