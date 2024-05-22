import React from 'react';
import './App.css'
import { Button } from './components/ui/button'
import { Home } from './page/Home';
import { Fitnotes } from './page/Fitnotes'
import { Loginf } from './page/Login_page'
import { FormCheck } from './page/FormCheck';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { Signupf } from './page/Sign_page';
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import Excercise from './excercise';
import Sets from './Sets';
import { Signup } from './page/Signup';
import { Login } from './page/Login';
import { Signupf } from './page/Sign_page';
const RootLayout = () => {

  return (
    <Outlet/>
  )
}

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//           <Route index element= {<Home />}/>
//           <Route path="/Fitnotes" element={<Fitnotes />}/>
//           <Route path="/Formcheck" element={<Formcheck />}/>

//     </Route>
//   )
// );

const router = createBrowserRouter([{
  path: "/",
  element: <RootLayout />,
  children: [
    {
      path: '/',
      element: <Loginf/>
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/Fitnotes',
      element: <Fitnotes />
    },
    {
      path: '/excercises/:excerciseId',
      element: <Excercise />
    },
    {
      path: '/excercises/:excerciseId/:excerciseName/sets',
      element: <Sets />
    },
    {
  path:'/Login_page',
  element:<Loginf/>
    },
    {
  path:'/Sign_page',
  element:<Signupf/>
    },
    {
      path:'/FormCheck',
      element:<FormCheck/>
        },
  

  ]
}])


function App() {

  return (
    <>
    <RouterProvider router={router} />
    <div>
            <ToastContainer position="top-right" autoClose={5000} />
            {/* Other components */}
        </div>
    </>

  )
}

export default App
