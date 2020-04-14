import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ModelViewer from './components/model-viewer/model-viewer.component';
import Header from './components/header/header.component';
import ModelsPage from './pages/models-page/models-page.component';
import ErrorBoundary from './utils/error-boundaries.component';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ModelsPage} />
          <Route path="/:id" component={ModelViewer} />
        </Switch>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
