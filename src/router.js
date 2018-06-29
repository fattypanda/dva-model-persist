import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import IndexPage from './routes/IndexPage';

function RouterConfig({ app, history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path='/home' exact component={dynamic({
          app,
          component: () => import('./routes/Home'),
          models: () => [
            import('./models/home'),
          ],
        })} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
