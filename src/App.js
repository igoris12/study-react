
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
      <ToolkitComponet />
      <DataContainer />

    </div>
  );
}

export default App;
