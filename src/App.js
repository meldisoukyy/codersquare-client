import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Homepage } from './pages/homepage';
import { Signup } from './pages/signup';
import { Login } from './pages/login'
import { ViewPost } from './pages/view_post';
import { NotFound } from './pages/404';


function App() {
  return (
    <Routes>
      <Route path='/user/signup' element={<Signup></Signup>}></Route>
      <Route path='/user/login'  element={<Login></Login>}></Route>
      <Route path='/' element={<Homepage></Homepage>}></Route>
      <Route path='/post/:id' element={<ViewPost></ViewPost>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
  );
}

export default App;