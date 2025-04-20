import React, { useContext } from 'react';
import { useRoutes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Navbar from './Components/Navbar';
import './App.css'
import { AuthContext } from './Context/AuthContext';
import { TodoContextProvider } from './Context/todoContext';


const App = () => {
  const {user}=useContext(AuthContext)
  const AppRoutes = () => {
    const routes = useRoutes([
      { path: '/', element: <Dashboard /> },
      {path:'/login',element:<Login />},
      {path:'/register',element:<Register />}
    ]);
  
    return routes;
  };
  return<>
  <TodoContextProvider>
  <AppRoutes />;
  </TodoContextProvider>
  </> 
};

export default App;
