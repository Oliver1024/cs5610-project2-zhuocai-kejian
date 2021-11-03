import React from "react";
import SquareEmpty from "./SquareEmpty"
import { useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


export default function Board() {
    const boardState = useSelector((state) => state.drag)
    const boardComponent = [];

    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push((
                <SquareEmpty key={i * 10 + j} symbol={boardState[i][j]} x={i} y={j} >
                </SquareEmpty>
            ))
        }
    }


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