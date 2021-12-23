
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import CountOneAndTwoTest from './components/CountOneAndTwoTest';
import { loginActionCreators } from './redux/index';
import Login from './components/Login';
import { fetchData } from './redux3/index';

function App() {

  // const logged = useSelector(state => state.login);

  const dispatch = useDispatch();

  const fetchUsers = bindActionCreators(fetchData, dispatch)
  // const { login } = bindActionCreators(loginActionCreators, dispatch)

  const data = useSelector(state => state)
  console.log(data);
  return (
    <div className="App">
      {/* <Login />
      {logged ? <CountOneAndTwoTest /> :
        <button onClick={() => login()}>Login</button>
      } */}

      {data.loding ? 'Loding...' : <button onClick={fetchUsers}>Fetch data</button>}

    </div>
  );
}

export default App;
