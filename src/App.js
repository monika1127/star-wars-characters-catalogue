import store from './store';
import Home from './Components/Home'
import {Provider} from 'react-redux'
import Navbar from './Components/Navbar';

function App() {
  return  (
  <Provider store={store}>
    <div>
      <Navbar />
      <Home />
    </div>
  </Provider>
  )
}

export default App;
