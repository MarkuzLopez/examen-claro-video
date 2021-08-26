import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './shared/Header';
import Catologo from './components/Catalogo';
import DetailMovie from './components/DetailMovie/DetailMovie';

const Routes = () => {
    return (
        <Router>
        <>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Catologo} />
              <Route  exact path="/detailMovie/:id" component={DetailMovie}  />
            </Switch>
          </div>
        </>
      </Router>
     );
}
 

export default Routes;