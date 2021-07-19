import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Support from '../pages/Support';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Support} />
    </Switch>
  );
};

export default Routes;
