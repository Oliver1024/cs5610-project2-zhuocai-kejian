import React from 'react'
import { useSelector, useDispatch } from "react-redux";

const Panel = () => {
    const click = useSelector((state) => state.click)

    const dispatch = useDispatch()

    return (
        <div className={click.className}>
            <div className="over-layer">
            </div>
            <div className="panel">
                <div className="head">
                    <span className="close" active={click.active} onClick={() => dispatch({
                        type: "panel-click",
                        active: "false"
                    })}>x</span>
                </div>
                <div className="text-wrapper">

                </div>
            </div>
        </div>
    )
}
export default Panel
