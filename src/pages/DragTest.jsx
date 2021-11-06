import React, { useMemo } from 'react'
import Boat from 'components/Boat'
import BoardHuman from 'components/BoardHuman'
import { useSelector } from 'react-redux';


function DragTest() {



    return (
        <div>
            <div className="page-wrapper">
                <div className="drag-container">
                </div>
                <BoardHuman />
            </div>
        </div>
    )
}

export default DragTest
