import React from 'react'
import './Loading.css'
const Loading = () => {
    return (
        <div className="d-flex vh-100 justify-content-center align-items-center loaderDiv">
            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loading