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
  };
}

const ModelItem: React.FC<IProps> = ({ result }) => {
  const {
    thumbnails: { images },
    uid,
    name,
  } = result;
  return (
    <ModelItemStyles>
      <div className="card">
        <button
          onClick={() => {
            console.log('clicked');
          }}
        >
          {images && <img src={images[1].url} className="image" />}
        </button>
        <div>{name}</div>
        <Link
          to={{
            pathname: `/model/${uid}`,
            state: result,
          }}
        >
          Viewer
        </Link>
      </div>
    </ModelItemStyles>
  );
};

export default ModelItem;
