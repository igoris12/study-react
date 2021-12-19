import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './redux/index';
function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  console.log(count);
  const { addOne, subOne } = bindActionCreators(actionCreators, dispatch)


  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => addOne()}>Add 1</button>
      <button onClick={() => subOne()}>Sub 1</button>
      <button>random</button>
    </div>
  );
}

export default App;
