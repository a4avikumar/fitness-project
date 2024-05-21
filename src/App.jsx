import React from 'react';
import './App.css'
import { Button } from './components/ui/button'
import { Home } from './page/Home';
import { Fitnotes } from './page/Fitnotes'
import { Formcheck } from './page/Formcheck'
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
      path: '/excercises/:excerciseId/sets',
      element: <Sets />
    },
  

  ]
}])


function App() {

  return (
    <>
    <RouterProvider router={router} />

    </>

  )
}

export default App
