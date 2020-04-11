import React from 'react';
import useFetch from '../hooks/useFetch';
import ModelItem from './ModelItem';
import ModelListStyles from '../styles/ModelListStyles';

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
    response: {
      results: any[];
    } | null,
    error: boolean | null,
    isLoading: boolean | null
  ) => {
    if (error) {
      console.error(error);
      return <div>Sorry, we encountered an error loading your data</div>;
    } else if (isLoading && !response) {
      return 'Your models are loading...';
    } else if (response) {
      return response.results.map((result: any) => (
        <ModelItem result={result} key={result.uid} />
      ));
    }
  };

  console.log(response)
  return (
    <ModelListStyles>
      Model List
      <div className="wrapper">
        {renderModelItem(response, error, isLoading)}
      </div>
    </ModelListStyles>
  );
};

export default ModelList;
