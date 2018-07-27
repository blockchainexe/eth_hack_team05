import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { UserIsAuthenticated } from './util/wrappers.js'

// Layouts
import App from './App'
import Top from './views/layouts/top/Top'
import Search from './views/layouts/search/Search'
import Mypage from './views/layouts/mypage/Mypage'
import Recommend from './views/layouts/recommend/Recommend'
import Matching from './views/layouts/matching/Matching'

// Redux Store
import store from './store'

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Top} />
          <Route path="search" component={UserIsAuthenticated(Search)} />
          <Route path="mypage" component={UserIsAuthenticated(Mypage)} />
          <Route path="recommend" component={UserIsAuthenticated(Recommend)} />
          <Route path="Matching" component={UserIsAuthenticated(Matching)} />
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')

)
