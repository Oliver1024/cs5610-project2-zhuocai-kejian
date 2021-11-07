import React from 'react'
import { useDispatch } from 'react-redux';
import { removeLocalStorage } from 'components/Store'

function Navbar() {

    const dispatch = useDispatch()

    return (
        <div className="nav-bar">
            <div className="nav-bar-title">

            </div>
            <div className="nav-bar-content">
                <span className="nav-bar-control">
                    <button type="button" className="btm btn-danger nav-bar-btn" onClick={() => dispatch({
                        type: "panel-click",
                        active: "true"
                    })}>Help</button>
                    <button type="button" className="btm btn-danger nav-bar-btn" onClick={() => {
                        removeLocalStorage();
                        window.location.reload();
                    }}>Reset</button>
                </span>
            </div>
        </div>
    )
}

export default Navbar
