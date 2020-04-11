import React from 'react';
import { Route } from 'react-router-dom';
import ModelsOverview from '../components/models-overview/models-overview.component';

const HomePage = () => {
  return (
    <div>
      HomePage - Sketchfab
      <Route
        exact
        component={ModelsOverview}
      />
    </div>
  );
};

export default HomePage;
