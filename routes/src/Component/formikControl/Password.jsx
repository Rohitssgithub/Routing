import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError/TextError'
import { TextField } from '@mui/material'
import styles from '../../Component/formikControl/Input.module.scss'

const Password = (props) => {
    const { label, name, icon, ...rest } = props
    return (
        <div className='input-control'>
            <label htmlFor={name}>{icon}</label>
            <Field name={name} {...rest}>
                {
                    ({ field }) => {
                        return (
                            <TextField
                                {...field}
                                type='password'
                                id={name}
                                label={label}
                                variant="standard"
                                className={styles.passwordField}
                                required
                            />
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Password