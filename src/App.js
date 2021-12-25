
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
// import CountOneAndTwoTest from './components/CountOneAndTwoTest';
import { loginActionCreators } from './redux/index';
import Login from './components/Login';
import DataContainer from './components/DataContainer';

function App() {
  const logged = useSelector(state => state.login);

  const dispatch = useDispatch();
  const { login } = bindActionCreators(loginActionCreators, dispatch)
  return (
    <div className="App">
      <Login />
      {logged ? <DataContainer /> :
        <button onClick={() => login()}>Login</button>
      }

    </div>
  );
}

export default App;
