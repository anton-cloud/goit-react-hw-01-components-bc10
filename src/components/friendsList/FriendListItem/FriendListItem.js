import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({avatar,name,isOnline}) => {
  console.log(avatar);
  return (
  <li className="item">
    {isOnline ? <span className="status status_active"></span> : <span className="status status_noActive"></span>}
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className="name">{name}</p>
</li>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
}

export default FriendListItem;