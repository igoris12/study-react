import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux2/index';
const Login = () => {
  const loginState = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const { login, logout } = bindActionCreators(actionCreators, dispatch);
  console.log(loginState);

  return (
    <div>
      login {JSON.stringify(loginState)}
      <div>
        {!loginState && <button onClick={() => login()}>Login</button>}
        {loginState && <button onClick={() => logout()}>Logout</button>}
      </div>
    </div>
  );
};

export default Login;
