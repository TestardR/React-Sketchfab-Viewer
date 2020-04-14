import React, { Fragment } from 'react';
import ModelItem from '../model-item/model-item.component';

interface IProps {
  resource: {
    results: {
      read: () => any
    };
  };
}

const ModelsOverview: React.FC<IProps> = ({ resource }) => {
  const { results } = resource.results.read();
  return (
    <Fragment>
      {results.map((result: any) => (
        <ModelItem result={result} key={result.uid} />
      ))}
    </Fragment>
  );
};

export default ModelsOverview;
