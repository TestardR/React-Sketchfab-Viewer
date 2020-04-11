import React from 'react';
import useFetch from '../../hooks/useFetch';
import ModelItem from '../model-item/model-item.component';
import ModelsOverviewStyles from './models-overview.styles';

const ModelsOverview: React.FC = () => {
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

  return (
    <ModelsOverviewStyles>
      <div className="wrapper">
        <div className="title">Random Models</div>
        <div className="items">
          {renderModelItem(response, error, isLoading)}
        </div>
      </div>
    </ModelsOverviewStyles>
  );
};

export default ModelsOverview;
