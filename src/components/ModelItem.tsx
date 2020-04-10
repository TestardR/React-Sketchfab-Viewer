import React from 'react';

interface IProps {
  result: {
      name: string
  }
}

const ModelItem: React.FC<IProps> = ({ result }) => {
  return <div>{result.name}</div>;
};

export default ModelItem;
