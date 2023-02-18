import { Route, Routes } from 'react-router-dom';
import { GlobalContext } from './context/context'
import Login from './components/Login';
import Signup from './components/Signup';
import Reset from './components/Reset';
import Dashboard from './components/Dashboard';

function App() {
  const { user } = GlobalContext();
  return (
    <>
      {user ? <Dashboard /> : <Routes>
        <Route exact path='/' element={<Signup />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/reset' element={<Reset />} />
      </Routes>
      }
    </>
  )
}

export default App
