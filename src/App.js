
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import CountOneAndTwoTest from './components/CountOneAndTwoTest';
import { loginActionCreators } from './redux/index';
import Login from './components/Login';
import { fetchData } from './redux3/index';
import UserListItem from './components/UserListItem';

function App() {

  // const logged = useSelector(state => state.login);

  const dispatch = useDispatch();

  const fetchUsers = bindActionCreators(fetchData, dispatch)
  // const { login } = bindActionCreators(loginActionCreators, dispatch)

  const data = useSelector(state => state.data)
  console.log(data);
  console.log(data.users);
  return (
    <div className="App">
      {/* <Login />
      {logged ? <CountOneAndTwoTest /> :
        <button onClick={() => login()}>Login</button>
      } */}

      {data.loding ? 'Loding...' : <button onClick={fetchUsers}>Fetch data</button>}
      <ul>
        <UserListItem />

        {data.users.length ? data.users.map((user) => { return <div>User ID:{user.id} Username: {user.username} email: {user.email} </div> }) : null}
      </ul>


    </div>
  );
}

export default App;
