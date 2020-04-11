import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ModelViewer from './components/model-viewer/model-viewer.component';
import ModelsOverview from './components/models-overview/models-overview.component';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ModelsOverview} />
        <Route  path="/:id" component={ModelViewer}/>
      </Switch>
    </Router>
  );
};

export default App;
