import React,{useMemo} from 'react';
import Navbar from 'components/Navbar';
import Panel from 'components/Panel';
import Board from 'components/BoardDraggable';
import { useSelector } from 'react-redux';
import WinPanel from 'components/WinPanel';
import { Containers } from "components/SquareContainers"

export default function PlaygroundFreeplay() {
    const win = useSelector((state) => state.winClick)
    const containers = useMemo(() => new Containers(), [])
    return (
        <React.Fragment>
            <div className="page-wrapper">
                <Panel />
                <Navbar />
                <div className="playground-mid-wrapper playground">

                    {win >= 17 ? (<WinPanel />) : ""}
                    <div className="board-wrapper board-ai">
                        <div className="board-background"></div>
                        <Board containers={containers}/>
                    </div>
                </div>

            </div>

        </React.Fragment>
    )
}