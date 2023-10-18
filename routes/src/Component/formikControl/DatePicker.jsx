import React from 'react'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import 'react-datepicker/dist/react-datepicker.css'
import { ErrorMessage, Field } from 'formik'
import TextError from '../TextError/TextError';

const DatePickers = (props) => {
    const { label, name, ...rest } = props
    return (
        <div className='input-control'>
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {
                    ({ form, field }) => {
                        const { setFieldValue } = form
                        const { value } = field
                        return (
                            <DatePicker
                                id={name}
                                {...field}
                                {...rest}
                                placeholderText="Select a date"
                                dateFormat="dd/MM/yyyy"
                                selected={value}
                                onChange={val => setFieldValue(name, val)}
                            />)
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default DatePickers
