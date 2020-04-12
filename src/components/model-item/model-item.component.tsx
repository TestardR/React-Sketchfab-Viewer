import React from 'react';
import ModelItemStyles from './model-item.styles';
import { Link } from 'react-router-dom';
import ThumbIcon from '../thumb-icon/thumb-icon.component';

interface IProps {
  result: {
    name: string;
    thumbnails: {
      images: { url: string }[];
    };
    uid: string;
    user: {
      avatar: {
        images: any[];
      };
      username: string;
    };
    commentCount: number;
    viewCount: number;
  };
}

const ModelItem: React.FC<IProps> = ({ result }) => {
  console.log(result);
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
        <div className="primary-group">
          <Link
            to={{
              pathname: `/model/${uid}`,
              state: result,
            }}
            className="link"
          >
            {images && <img src={images[1].url} className="image" />}
            <div className="content">
              {avatar && <img src={avatar.images[1].url} className="image" />}
              <div className="content-info">
                <div className="name">{name}</div>
                <div className="username">{username}</div>
              </div>
            </div>
            <div className="overlay">
              <img
                src={'https://static.sketchfab.com/img/press/logos/logo.png'}
                className="logo"
                alt="logo"
              />
            </div>
          </Link>
        </div>
        <div className="info">
          <div className="feedback">
            <div className="">Comments: {commentCount}</div>
            <div className="">Views: {viewCount}</div>
          </div>
          <ThumbIcon />
        </div>
      </div>
    </ModelItemStyles>
  );
};

export default ModelItem;
