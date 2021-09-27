import React from 'react'
import FriendListItem from './FriendListItem/FriendListItem';
import { FriendListStyled } from './FriendListStyled';
import PropTypes from 'prop-types';


const FriendsList = ({friends}) => {
  return (
  <FriendListStyled>
    {friends.map((friend)=><FriendListItem 
    key={friend.id}
    avatar={friend.avatar} 
    name={friend.name} 
    isOnline={friend.isOnline}/>)}
  </FriendListStyled>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.array,
}

export default FriendsList;