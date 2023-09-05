import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter, RouterProvider 
} from "react-router-dom";
import SignIn from './pages/SignIn';
import Games from './pages/Games';
import Home from './pages/Home';
import AuthProvider from './contexts/auth';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/signin",
        element: <SignIn/>
      },
      {
        path: "/games",
        element: <Games/>
      },
      {
        path: "/",
        element: <Home/>
      },
      
    ]
    },
]);




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
    
  </React.StrictMode>
);



reportWebVitals();
