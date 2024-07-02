import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginRegister from './components/LoginReg/LoginRegister';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginRegister/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
