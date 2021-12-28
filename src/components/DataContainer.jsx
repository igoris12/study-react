import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux5/features/users/usersSlice';
import UserListItem from './UserListItem';

const DataContainer = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="header">Fetch data to redux store</h2>
      <ul className="listContainer">
        <button className="but" onClick={() => dispatch(fetchUsers())}>
          Fetch data
        </button>
        <div className="listHeader">
          <span className="idTitle">ID</span>
          <span className="usernameTitle">Username</span>
          <span className="emailTitle">Email</span>
        </div>

        {users.list.length
          ? users.list.map((user) => {
              return <UserListItem key={user.id} userData={user} />;
            })
          : null}
      </ul>
    </div>
  );
};

export default DataContainer;
