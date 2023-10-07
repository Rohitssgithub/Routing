import React from 'react'
import { getToken } from '../utils';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({component: Component}) => {
    console.log(getToken())

  return (
    !getToken() ? <Component /> : <Navigate to="/" /> 
  )
}

export default PublicRoute