import { Route, Routes } from 'react-router-dom'

import Home from './Pages/home/home'
import Login from './Pages/login/login'
import Profil from './Pages/profil/profil'
import NotFound from './Pages/notFound/notFound'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profil" element={<Profil/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
