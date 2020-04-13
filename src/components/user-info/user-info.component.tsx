import React from 'react';
import UserInfoStyles from './user-info.styles';

interface IProps {
  avatar: {
    images: any[];
  };
  name: string;
  username: string;
  styles?: boolean;
}

const UserInfo: React.FC<IProps> = ({ avatar, name, username, styles }) => {
  return (
    <UserInfoStyles>
      <div className="content">
        {avatar && (
          <img
            src={avatar.images[1].url}
            className={styles ? 'styled-avatar' : 'avatar'}
          />
        )}
        <div>
          <div className="name">{name}</div>
          <div className="username">{username}</div>
        </div>
      </div>
    </UserInfoStyles>
  );
};

export default UserInfo;
