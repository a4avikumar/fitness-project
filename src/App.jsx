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
const RootLayout = () => {

  return (
    <Outlet/>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
          <Route index element= {<Home />}/>
          <Route path="/Fitnotes" element={<Fitnotes />}/>
          <Route path="/Formcheck" element={<Formcheck />}/>

    </Route>
  )
);


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
