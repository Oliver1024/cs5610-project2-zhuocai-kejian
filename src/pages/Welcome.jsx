import React from 'react'
import { Link } from 'react-router-dom'
import 'css/style.css'
import Panel from 'components/Panel'
import { useDispatch } from 'react-redux';


export default function Welcome() {

    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <Panel />
            <div className="welcome-page-wrapper">
                <div className="title">
                    WHERE'D U HIDE
                </div>
                <div className="box-with-info">
                    <div className="difficulty-selecter-wrapper ">
                        <span className="difficulty">
                            <Link to="/playground-normal" className="control" >
                                <button type="button" className="btn btn-difficulty" >
                                    Normal Game</button>
                                <span class="tooltiptext">
                                    <div className="tip-wrapper">
                                        Start a normal game with a stupid stupid AI!
                                    </div>
                                </span>
                            </Link>

                        </span>
                        <span className="difficulty">
                            <Link to="/playground-freeplay" className="control" id="free-play">
                                <button type="button" className="btn btn-difficulty">Free Play</button>
                                <div class="tooltiptext">
                                    <div className="tip-wrapper">
                                        Get a free play with no one competing with you!
                                    </div>
                                </div>
                            </Link>
                        </span>
                        <span className="difficulty">
                            <button className="btn btn-help" onClick={() => dispatch({
                                type: "panel-click",
                                active: "true"
                            })}>?</button>
                        </span>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}