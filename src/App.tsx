import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ModelViewer from './components/model-viewer/model-viewer.component';
import Header from './components/header/header.component';
import ModelsPage from './pages/models-page.component';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ModelsPage} />
        <Route  path="/:id" component={ModelViewer}/>
      </Switch>
    </Router>
  );
};

export default App;
