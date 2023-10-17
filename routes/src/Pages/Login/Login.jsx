import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../Login/Login.scss'
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import FormikControl from '../../Component/formikControl/FormikControl';
import { userLogin } from '../../Redux/Slice/LoginSlice';
import Button from '../../Component/Button/Button';

import * as Yup from 'yup'
const LoginForm = ({ openLogin, closeModal, openRegi, setIsLogin, setIsRegister }) => {
  let dispatch = useDispatch()
  let navigate = useNavigate()
  let [data, setData] = useState({
    username: '',
    password: '',
  })
  const { loginUser, loading } = useSelector((state) => state.login)
  console.log('loginUser', loginUser)

  const setUserFun = (loginUser) => {
    localStorage.setItem('userData', JSON.stringify(loginUser))
  }
  const onSubmit = async (values) => {
    console.log('values', values)
    dispatch(userLogin(values));
    setUserFun(loginUser)
    navigate('/')
  };
  const initialValues = {
    username: '',
    password: ''
  }
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Name is Required'),
    password: Yup.string().required('This Field is required')
  })

  return (
    <>
      <div className='container login-box text-center'>
        <h3 className='mb-4'>Login Here</h3>
        <div className='row main-row justify-content-center m-0 p-0'>
          <div className='col-lg-4 col-md-5 col-10 main-form'>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {formik => {
                return (
                  <Form>
                    <FormikControl
                      control='input'
                      type='text'
                      label=' Enter Username'
                      placeholder='Enter Your Username'
                      name='username'
                    />
                    <FormikControl
                      control='password'
                      type='password'
                      label=' Enter Password'
                      placeholder='Enter Your Password'
                      name='password'
                    />
                    <div>
                      <Button type='submit' label='Login' className='btn btn-danger my-3'>login</Button>
                    </div>
                  </Form>
                )
              }}
            </Formik>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginForm