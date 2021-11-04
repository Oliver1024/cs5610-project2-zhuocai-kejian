import React, { useEffect, useState } from "react";
import SquareEmpty from "./SquareEmpty"
import SquareTest from "./SquareTest"
import { useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Piece } from "components/Piece"


export default function Board({ game }) {
    const boardState = useSelector((state) => state.drag)
    const boardComponent = [];
    const [[boatX, boatY], setBoatPos] = useState(game.boatPosition);
    useEffect(() => game.observe(setBoatPos));
    function renderSquare(i) {
        const x = i % 10
        const y = Math.floor(i / 10);

        return (
            <div key={i} style={{ width: '10%', height: '10%' }} >
                <SquareEmpty x={x} y={y} game={game}>
                    <Piece isBoat={x === boatX && y === boatY} />
                </SquareEmpty>
            </div>
        )
    }

    for (let i = 0; i < 100; i++) {
        boardComponent.push(renderSquare(i));
    }

    // for (let i = 0; i < boardState.length; i++) {
    //     let row = boardState[i];
    //     for (let j = 0; j < row.length; j++) {
    //         boardComponent.push((
    //             <SquareEmpty key={i * 10 + j} symbol={boardState[i][j]} x={i} y={j} >
    //             </SquareEmpty>
    //         ))
    //     }
    // }



    return (
        <React.Fragment>
            <DndProvider backend={HTML5Backend}>
                <div className="board">
                    {boardComponent}
                </div>
            </DndProvider>

        </React.Fragment>
    )
};