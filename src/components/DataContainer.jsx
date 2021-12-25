import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../redux/index';
import UserListItem from '../components/UserListItem';

const DataContainer = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const fetchUsers = bindActionCreators(fetchData, dispatch);
  return (
    <div>
      <h2 className="header">Fetch data to redux store</h2>
      <ul className="listContainer">
        {data.loading ? (
          'Loding...'
        ) : (
          <button className="but" onClick={fetchUsers}>
            Fetch data
          </button>
        )}
        <div className="listHeader">
          <span className="idTitle">ID</span>
          <span className="usernameTitle">Username</span>
          <span className="emailTitle">Email</span>
        </div>

        {data.users.length
          ? data.users.map((user) => {
              return <UserListItem key={user.id} userData={user} />;
            })
          : null}
      </ul>
    </div>
  );
};

export default DataContainer;
