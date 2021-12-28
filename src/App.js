
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import CountOneAndTwoTest from './components/CountOneAndTwoTest';
import { loginActionCreators } from './redux/index'; import Login from './components/Login';
import DataContainer from './components/DataContainer';
import ToolkitComponet from './components/ToolkitComponet';

function App() {
  const logged = useSelector(state => state.login);


  return (
    <div className="App">
      {/* <Login />
      {logged ? <div> <DataContainer />   <h2 className="header">Counter with redux</h2> <CountOneAndTwoTest /> </div> :
        null
      } */}

      <ToolkitComponet />
      <DataContainer />

    </div>
  );
}

export default App;
