import React, { useMemo } from 'react'
import Boat from 'components/Boat'
import BoardHuman from 'components/BoardHuman'
import { useSelector } from 'react-redux';
import { Game } from 'components/Game'

function DragTest() {

    const game = useMemo(() => new Game(), []);

    return (
        <div>
            <div className="page-wrapper">
                <div className="drag-container">
                </div>
                <BoardHuman game={game} />
            </div>
        </div>
    )
}

export default DragTest
