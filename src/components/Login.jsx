import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux2/index';
const Login = () => {
  const loginState = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const { login, logout } = bindActionCreators(actionCreators, dispatch);

  return (
    <div>
      <h1>
        {loginState
          ? 'You are logged you can fetch data.'
          : 'Login to fetch users.'}
      </h1>
      {/* login {JSON.stringify(loginState)} */}
      <div>
        {!loginState && <button onClick={() => login()}>Login</button>}
        {loginState && <button onClick={() => logout()}>Logout</button>}
      </div>
    </div>
  );
};

export default Login;
