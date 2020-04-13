import React, { Suspense, lazy } from 'react';
import { useSuspense } from '../hooks/useSuspense';
import ModelsPageStyles from './models-page.styles';
import SkeletonCardContainer from '../components/skeleton-card/skeleton-card-container-component';
const ModelsOverview = lazy(() =>
  import('../components/models-overview/models-overview.component')
);

const ModelsPage = () => {
  const uri = 'https://api.sketchfab.com/v3/search?type=models';
  const options = {
    method: 'get',
    headers: {
      Authorization: `Token ${process.env.REACT_APP_API_TOKEN}`,
    },
  };
  const resource = useSuspense(uri, options);
  return (
    <ModelsPageStyles>
      <div className="wrapper">
        <div className="title">Random Models</div>
        <div className="items">
          <Suspense fallback={<SkeletonCardContainer n={24} />}>
            <ModelsOverview resource={resource} />
          </Suspense>
        </div>
      </div>
    </ModelsPageStyles>
  );
};

export default ModelsPage;
