import React from 'react'
import { Field, ErrorMessage } from 'formik'
// import { TextField } from '@mui/material'
import TextError from '../TextError/TextError';
import TextField from '@mui/material/TextField';
import styles from '../../Component/formikControl/Input.module.scss'

const Input = (props) => {
    console.log(props)
    const { label, name, type, icon, ...rest } = props;
    return (
        <div className={styles.inputControl}>
            <label htmlFor={name}>{icon}</label>
            <Field name={name} {...rest}>
                {
                    ({ field }) => {
                        return (
                            <TextField
                                {...field}
                                id={name}
                                label={label}
                                variant="standard"
                                className={styles.inputField}
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

export default Input