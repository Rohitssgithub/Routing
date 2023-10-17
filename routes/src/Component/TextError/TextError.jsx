import React from 'react'
import './TextError.css'
import styles from '../../Component/formikControl/Input.module.scss'
const TextError = (props) => {
    console.log(props)
    return (
        <div className={styles.errorMsg}>
            {props.children}
        </div>
    )
}

export default TextError
