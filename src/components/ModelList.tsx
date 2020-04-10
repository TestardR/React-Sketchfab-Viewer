import React from 'react';
import useFetch from '../hooks/useFetch';

const ModelList: React.FC = () => {
  const uri = 'https://api.sketchfab.com/v3/search?type=models';
  const options = {
    method: 'get',
    headers: {
      Authorization: `Token ${process.env.REACT_APP_API_TOKEN}`,
    },
  };

  const { response, error, isLoading } = useFetch(
    uri,
    options
  );

  return <div>Model List</div>;
};

export default ModelList;
