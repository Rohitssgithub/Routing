import React, { useState } from 'react';
import BasicModal from './Modal';
import Button from '../Button/Button';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import { addUser } from '../../Redux/Slice/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../Redux/Slice/UserSlice';


const EditUserModal = (props) => {
    console.log('props', props)

    let [ids, setIds] = useState(props?.seletedData?.id)
    console.log("ids", ids)
    let [formData, setFormData] = useState({ ...props?.seletedData })
    console.log(formData)

    let dispatch = useDispatch()



    // const handlechange = (e) => {
    //     SetUser({ ...user, [e.target.name]: e.target.value })
    // }
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Name is Required'),
        email: Yup.string().email('Invalid email').required('Email is Required'),
        phone: Yup.string()
            .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
            .required('Phone number is Required'),
    })

    const initialValues = {
        name: '',
        email: '',
        phone: '',
    }
    const modi = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
    }
    return (
        <>
            <BasicModal heading={'Add user'} {...props}>
                <div>
                    <Formik
                        initialValues={Object.keys(formData).length === 0 ? initialValues : modi}
                        validationSchema={SignupSchema}
                        onSubmit={values => {
                            console.log('values', values)

                            if (Object.keys(formData).length === 0) {
                                dispatch(addUser(values))
                            }
                            else {
                                // console.log("payload",payload)
                                // dispatch(updateUser(payload))
                                dispatch(updateUser({ id: ids, value: values }))
                                props?.setModalOpen(false)
                            }
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div className="mb-4">
                                    <label htmlFor="exampleFormControlInput1" >Name</label>
                                    <Field name="name"
                                        className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')}
                                        placeholder="Enter your Name" />
                                    {errors.name && touched.name ? (
                                        <span className='error-text'>{errors.name}</span>
                                    ) : null}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <Field name="email"
                                        className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}
                                        placeholder="Enter your Email" />
                                    {errors.email && touched.email ? (
                                        <span className='error-text'>{errors.email}</span>
                                    ) : null}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Phone No.</label>
                                    <Field name="phone" type="text"
                                        className={'form-control' + (errors.phone && touched.phone ? ' is-invalid' : '')} placeholder="Enter your phone number" />
                                    {errors.phone && touched.phone ?
                                        <span className='error-text'>{errors.phone}</span>
                                        : null}
                                </div>
                                <div className="mb-3 text-center">
                                    <Button label="submit" className='btn btn-danger' type='submit' />
                                </div>
                            </Form>
                        )}

                    </Formik>
                </div>
            </BasicModal>
        </>
    )
}

export default EditUserModal