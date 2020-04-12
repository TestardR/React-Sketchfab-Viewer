import React from 'react';
import ModelItemStyles from './model-item.styles';
import { Link } from 'react-router-dom';

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
    user: { avatar },
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
              <div className="name">{name}</div>
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
          <div className="">Comments: {commentCount}</div>
          <div className="">Views: {viewCount}</div>
        </div>
      </div>
    </ModelItemStyles>
  );
};

export default ModelItem;
