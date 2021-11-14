import React, { useState } from "react";
import SquareDroppable from "./SquareDroppable";
import { useSelector } from "react-redux"


export default function Board({ containers }) {
    const [boardState, setBoard] = useState([
        ['X4', 'X3', 'X2', 'X2', 'X3', '0', '0', '0', '0', '0'],
        ['X4', 'X3', '0', '0', 'X3', '0', '0', '0', '0', '0'],
        ['X4', 'X3', '0', '0', 'X3', '0', '0', '0', '0', '0'],
        ['X4', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['X5', 'X5', 'X5', 'X5', 'X5', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
    ])

    const boardState2 = useSelector((state) => state.drag)
    console.log(boardState)

    const boardComponent = [];

    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push((
                <SquareDroppable containers={containers} symbol={boardState[i][j]} boardstate={boardState} x={i} y={j} onChange={setBoard} />
            ))
        }
    }


    return (
        <React.Fragment>
            <div className="board">
                {boardComponent}
            </div>
        </React.Fragment>
    )
};