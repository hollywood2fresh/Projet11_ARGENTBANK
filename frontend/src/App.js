import { Route, Routes } from 'react-router-dom'

import Home from './pages/home/home'
import SignIn from './pages/signIn/signIn'
import Profils from './pages/profile/profile'
import NotFound from './pages/NoRepley/noRepley'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/profile" element={<Profils/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
