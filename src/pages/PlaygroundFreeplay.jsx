import React from 'react';
import Navbar from 'components/Navbar';
import Panel from 'components/Panel';
import Board from 'components/Board';
import { useSelector } from 'react-redux';

export default function PlaygroundFreeplay() {
    const win = useSelector((state) => state.winClick)
    const className = win >= 17 ? 'active' : 'disabled'

    return (
        <React.Fragment>
            <Navbar />
            <Panel />
            <div className="playground-mid-wrapper">
                <Board />
            </div>
            <h1 className={className}> You win!!!</h1>
        </React.Fragment>
    )
}