import React from 'react';
import ModelItemStyles from '../styles/ModelItemStyles';

interface IProps {
  result: {
    name: string;
    thumbnails: {
      images: { url: string }[];
    };
  };
}

const ModelItem: React.FC<IProps> = ({ result }) => {
  return (
    <ModelItemStyles>
      <div className="card">
        <button onClick={() => console.log('you clicked me')}>
          {result.thumbnails.images && (
            <img src={result.thumbnails.images[1].url} className="image" />
          )}
        </button>
        <div>{result.name}</div>
      </div>
    </ModelItemStyles>
  );
};

export default ModelItem;
