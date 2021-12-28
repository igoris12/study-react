import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux5/features/users/usersSlice';

const DataContainer = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(users);

  return (
    <div>
      <h2 className="header">Fetch data to redux store</h2>
      <ul className="listContainer">
        <div className="listHeader">
          <span className="idTitle">ID</span>
          <span className="usernameTitle">Username</span>
          <span className="emailTitle">Email</span>
        </div>
        <button onClick={() => dispatch(fetchUsers())}>test</button>
      </ul>
    </div>
  );
};

export default DataContainer;
