import React from 'react';
import useFetch from '../hooks/useFetch';
import ModelItem from './ModelItem';

const ModelList: React.FC = () => {
  const uri = 'https://api.sketchfab.com/v3/search?type=models';
  const options = {
    method: 'get',
    headers: {
      Authorization: `Token ${process.env.REACT_APP_API_TOKEN}`,
    },
  };
  const { response, error, isLoading } = useFetch(uri, options);

  const renderModelItem = (
    response: any | null,
    error: boolean | null,
    isLoading: boolean | null
  ) => {
    if (isLoading && !response) {
      return 'loading';
    } else if (!isLoading && response) {
      return response.results.map((result: any) => (
        <ModelItem result={result} key={result.uid} />
      ));
    }

    if (error) {
      return <div>Sorry, we encountered an error loading your data</div>;
    }
  };

  return (
    <div>
      Model List
      {renderModelItem(response, error, isLoading)}
    </div>
  );
};

export default ModelList;
