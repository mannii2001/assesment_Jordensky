import './App.css';
import {Routes,Route} from 'react-router-dom'
import ChartPage from './Pages/ChartPage'
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path="/chartPage" element={<ChartPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
