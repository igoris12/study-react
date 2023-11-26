import { useState } from "react";
import UserListItem from "../UserListItem";

function DataContanerStatic() {
    const data = [
        { id: 0, username: "Brujet", email: "Sincere@april.biz" },
        { id: 1, username: "Aruyjet", email: "Sincere@april.biz" },
        { id: 2, username: "Sujret", email: "Sincere@april.biz" },
        { id: 3, username: "Dret", email: "Sincere@april.biz" },
        { id: 4, username: "Grasdfset", email: "Sincere@april.biz" },
        { id: 5, username: "Hret", email: "Sincere@april.biz" },
        { id: 6, username: "Gradsfet", email: "Sincere@april.biz" },
        { id: 7, username: "Tadsfret", email: "Sincere@april.biz" },
        { id: 8, username: "Wdasfret", email: "Sincere@april.biz" },
        { id: 9, username: "Nythret", email: "Sincere@april.biz" },
      ]
  const [users, setUsers] = useState(data);
  const [sort, setSort] = useState({ sorted: "id", reversed: false });
  const [searchPhrase , setSearchPhrase] = useState('');

  const sortById = () => {
    setSort({ sorted: "id", reversed: !sort.reversed });
    const usersCopy = [...users];
    usersCopy.sort((user1, user2) => {
        if (sort.reversed) {
          return  user1.id - user2.id;
        }
        else {
            return user2.id - user1.id;
        }
    });
    setUsers(usersCopy);
  };

  const sortByName = () => {
    setSort({ sorted: "username", reversed: !sort.reversed });
    const usersCopy = [...users];
    usersCopy.sort((user1, user2) => {
        if (sort.reversed) {
            return user2.username.localeCompare(user1.username);

        }else {

            return user1.username.localeCompare(user2.username);
        }
    });
    setUsers(usersCopy);
  };
  
  const searchMatch = (event) => {
    const matchedData = data.filter((user)=> {
        return user.username.toLowerCase().includes(event.target.value.toLowerCase());
    })
    setUsers(matchedData);
    setSearchPhrase(event.target.value);
  }

  return (
    <div>
      <h2 className="header">Data sort </h2>
      <ul className="listContainer">
        <div className="search">
            <input type="text"
            placeholder="Search"
            value={searchPhrase}
            onChange={searchMatch}/>
            
        </div>
        <button className="but">Fetch data</button>
        <div className="listHeader">
          <span className="idTitle" onClick={sortById}>ID</span>
          <span className="usernameTitle" onClick={sortByName}>Username</span>
          <span className="emailTitle">Email</span>
        </div>

        {users.map((user) => {
          return <UserListItem key={user.id} userData={user} />;
        })}
      </ul>
    </div>
  );
}

export default DataContanerStatic;
