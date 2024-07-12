import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginRegister from './components/LoginReg/LoginRegister';
import ViewBlogs from './components/ViewBlog/ViewBlogs';
import Logout from './components/LoginReg/Logout';
import MyBlog from './components/MyBlog/MyBlog';
import AddBlog from './components/MyBlog/AddBlog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginRegister/>}/>
        <Route path='/home' element={<ViewBlogs/>}/>
        <Route path='/my-blog' element={<MyBlog/>}/>
        <Route path='/add-blog' element={<AddBlog/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
