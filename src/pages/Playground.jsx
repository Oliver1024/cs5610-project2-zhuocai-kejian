import React from 'react';
import Navbar from 'components/Navbar';
import Panel from 'components/Panel';
import Board from 'components/Board';
import { useSelector } from 'react-redux';

export default function Playground() {
    const win = useSelector((state) => state.winClick)
    const className = win >= 17 ? 'active' : 'disabled'

    return (
        <React.Fragment>
            <Navbar />
            <Panel />
            <Board />
            <h1 className={className}> You win!!!</h1>
        </React.Fragment>
    )
}