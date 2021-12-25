
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

  return (
    <div className="App">
      {/* <Login />
      {logged ? <CountOneAndTwoTest /> :
        <button onClick={() => login()}>Login</button>
      } */}

      {data.loading ? 'Loding...' : <button onClick={fetchUsers}>Fetch data</button>}
      <ul className='listContainer'>
        <div className='listHeader'><span className='idTitle'>ID</span><span className='usernameTitle'>Username</span><span className='emailTitle'>Email</span></div>


        {data.users.length ? data.users.map((user) => { return <UserListItem key={user.id} userData={user} /> }) : null}
      </ul>


    </div>
  );
}

export default App;
