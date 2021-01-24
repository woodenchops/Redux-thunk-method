import './App.css';
import { Provider } from 'react-redux';
import Counter from './components/Counter';


import store from './store'; 
import Login from './components/Login';

function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <Login/><br></br>
        <Counter/>

      </div>
    </Provider>
  );
}

export default App;
