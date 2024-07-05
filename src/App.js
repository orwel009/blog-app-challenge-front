import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginRegister from './components/LoginReg/LoginRegister';
import ViewBlogs from './components/ViewBlog/ViewBlogs';
import Logout from './components/LoginReg/Logout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginRegister/>}/>
        <Route path='/home' element={<ViewBlogs/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
