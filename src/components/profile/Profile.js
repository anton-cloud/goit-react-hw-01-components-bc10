import React from 'react';
import { ProfileStyled } from './ProfileStyled';
import PropTypes from 'prop-types';

const Profile = ({name,tag,location,avatar,stats}) => {

  return (
<ProfileStyled>
  <div className="description">
    <img
      src={avatar}
      alt={name}
      className="avatar"
    />
    <p className="name">{name}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</ProfileStyled>
  );
}

Profile.defaultProps = {
  name: 'No data',
  tag: 'No data',
  location:'No data',
  avatar:'No data',
  stats:'No data',
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
}

export default Profile;