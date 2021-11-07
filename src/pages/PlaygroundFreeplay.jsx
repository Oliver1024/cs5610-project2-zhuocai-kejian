import React from 'react';
import Navbar from 'components/Navbar';
import Panel from 'components/Panel';
import Board from 'components/BoardSingle';
import { useSelector } from 'react-redux';
import WinPanel from 'components/WinPanel';

export default function PlaygroundFreeplay() {
    const win = useSelector((state) => state.winClick)

    return (
        <React.Fragment>
            <Navbar />
            <Panel />
            <div className="playground-mid-wrapper playground">
                {win >= 17 ? (<WinPanel />) : ""}
                <div className="board-wrapper board-ai">
                    <div className="board-background"></div>
                    <Board />
                </div>
            </div>
        </React.Fragment>
    )
}