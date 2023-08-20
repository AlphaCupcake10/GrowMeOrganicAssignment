import { Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import Dashboard from './Pages/Dashboard';
// import { useAuth } from './Contexts/AuthContext';


function App()
{
  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/" element={<Dashboard/>} />
      <Route path="/*" element={<h1>404</h1>} />
    </Routes>
  )
}

export default App
