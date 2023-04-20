import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Callback from './Pages/Callback';
import Memo from './Pages/Memo';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Memo />} />
          <Route exact path="/callback" element={<Callback />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
