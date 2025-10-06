import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'





import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/MainLayout.jsx';
import Home from './Components/Home.jsx';
import Erro from './Pages/Erro.jsx';
import AddCoffe from './Pages/AddCoffe';
import UpdateCoffe from './Pages/UpdateCoffe.jsx';
import CustomToast from './Components/CustomToast.jsx';
import { CoffeProvider } from './Context/CoffeeContext.jsx';

import Register from './Components/Register.jsx';
import Profile from './Components/Profile.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import PrivateRoute from './Pages/PrivateRoute.jsx';
import Login from './Components/Login/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children: [
     { index: true, element: <Home /> },
       {path:'addcoffee',element:
       <PrivateRoute> <AddCoffe></AddCoffe></PrivateRoute>},
       {path:'editcoffee/:id',
       loader:({params})=>{
        fetch(`http://localhost:3000/coffees/${params.id}`);
       },
      element:<UpdateCoffe></UpdateCoffe>}
       ,
       {
        path:'/login',
        element:<Login></Login>
       },
       {
        path:'/register',
        element:<Register></Register>
       },
       {
        path:'/profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
       },
      { path: "*", element: <Erro /> }, 
    ]
  },
    
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CoffeProvider>
    <AuthProvider>
     <RouterProvider router={router} />
      </AuthProvider>
      <CustomToast></CustomToast>
       </CoffeProvider>
  </StrictMode>,
)
