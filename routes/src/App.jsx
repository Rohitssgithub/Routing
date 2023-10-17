import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './App.css'
import { router } from './Routing/routing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App