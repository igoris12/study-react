
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

  const users = useSelector(state => state.data)
  console.log(users.data);
  return (
    <div className="App">
      {/* <Login />
      {logged ? <CountOneAndTwoTest /> :
        <button onClick={() => login()}>Login</button>
      } */}

      {users.loding ? 'Loding...' : <button onClick={fetchUsers}>Fetch data</button>}
      {users.data.map(user => console.log(1))}


    </div>
  );
}

export default App;
