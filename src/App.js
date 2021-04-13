import store from './store';
import Home from './Components/Home'
import {Provider} from 'react-redux'

function App() {
  return  (
  <Provider store={store}>
    <div>
      <div> Star Wars - characters catalogue</div>
      <Home />
    </div>
  </Provider>
  )
}

export default App;
