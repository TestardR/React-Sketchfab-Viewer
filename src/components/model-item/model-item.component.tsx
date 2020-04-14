import React from 'react';
import { Link } from 'react-router-dom';
import ModelItemStyles from './model-item.styles';
import ModelItemInfo from '../model-item-info/model-item-info.component';
import UserInfo from '../user-info/user-info.component';

interface IUser {
  avatar: {
    images: any[];
  };
  username: string;
}

interface IProps {
  result: {
    name: string;
    thumbnails: {
      images: { url: string }[];
    };
    uid: string;
    user: IUser;
    commentCount: number;
    viewCount: number;
  };
}

const ModelItem: React.FC<IProps> = ({ result }) => {
  const {
    thumbnails: { images },
    uid,
    name,
    commentCount,
    viewCount,
    user: { avatar, username },
  } = result;
  return (
    <ModelItemStyles>
      <div className="card">
        <div className="group">
          <Link
            to={{
              pathname: `/model/${uid}`,
              state: result,
            }}
            className="link"
          >
            {images && <img src={images[1].url} className="image" />}
            <UserInfo avatar={avatar} name={name} username={username} />
            <div className="overlay">
              <img
                src={'https://static.sketchfab.com/img/press/logos/logo.png'}
                className="logo"
                alt="logo"
              />
            </div>
          </Link>
        </div>
        <ModelItemInfo commentCount={commentCount} viewCount={viewCount} />
      </div>
    </ModelItemStyles>
  );
};

export default ModelItem;
