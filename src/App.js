import MainPage from './components/MainPage';
import { Routes, Route } from "react-router-dom";
import DataContainer from './components/DataContainer';
import ToolkitComponet from './components/ToolkitComponet';
import NavBar from './components/NavBar';
import ClassContext from './components/ClassContext.jsx';

function App() {


  return (
    <div className="App">

      <NavBar />
      <Routes>
        <Route path="/study-react" element={<MainPage />} />
        <Route path="/study-react/countToolkit" element={<ToolkitComponet />} />
        <Route path="/study-react/fetchData" element={<DataContainer />} />
        <Route path="/study-react/contextAPI" element={<ClassContext />} />
      </Routes>

    </div>
  );
}

export default App;
