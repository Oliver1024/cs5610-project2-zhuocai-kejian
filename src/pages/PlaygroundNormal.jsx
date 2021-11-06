import React from 'react';
import Navbar from 'components/Navbar';
import Panel from 'components/Panel';
import Board from 'components/Board';
import BoardPlayer from 'components/BoardPlayer';
import { useSelector } from 'react-redux';

export default function PlaygroundNormal() {
    const win = useSelector((state) => state.winClick)
    const className = win >= 17 ? 'active' : 'disabled'

    return (
        <React.Fragment>
            <Navbar />
            <Panel />
            <div className="playground-double-wrapper playground">
                <div className="board-wrapper board-ai">
                    <div className="board-background"></div>
                    <Board />
                </div>
                <div className="board-wrapper board-human">
                    <div className="board-background"></div>
                    <BoardPlayer />
                </div>
            </div>
        </React.Fragment>
    )
}