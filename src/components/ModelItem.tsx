import React from 'react';
import ModelItemStyles from '../styles/ModelItemStyles';

interface IProps {
  result: {
    name: string;
  };
}

const ModelItem: React.FC<IProps> = ({ result }) => {
  return (
    <ModelItemStyles>
      <div className="card">{result.name}</div>
    </ModelItemStyles>
  );
};

export default ModelItem;
