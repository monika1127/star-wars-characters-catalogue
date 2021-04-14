import store from './store';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Search from './Components/Search'

function App() {
  return  (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/search' component={Search} />
      </Switch>
    </Router>
  </Provider>
  )
}

export default App;
