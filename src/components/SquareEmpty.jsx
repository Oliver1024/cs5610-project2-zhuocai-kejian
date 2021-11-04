import React from "react";
import { ItemTypes } from "components/ItemTypes"
import { useSelector, useDispatch } from "react-redux";
import SquareTest from 'components/SquareTest'
import SquareTest2 from 'components/SquareTest2'
import { useDrop } from 'react-dnd'

export default function SquareEmpty({ x, y, children, game, }) {
    // const x = props.x;
    // const y = props.y;
    // const dispatch = useDispatch()
    // const item = useSelector((state) => state.dragItem)
    // const boardState = useSelector((state) => state.drag)

    // const isSquareHere = x === itemPosition[0] && y === itemPosition[1]
    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: ItemTypes.SQUARE,
        canDrop: () => game.canMoveBoat(x, y),
        drop: () => game.moveBoat(x, y),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    }), [game]);

    return (
        // <div ref={drop} className="square-empty" onDragEnd={
        //     dispatch(
        //         {
        //             type: "dragEnd",
        //             x: x,
        //             y: y,
        //             symbol: item
        //         }
        //     )
        // }>
        //     {props.symbol === "5" ? <SquareTest symbol={props.symbol} /> : ''}
        //     {props.symbol === "4" ? <SquareTest2 symbol={props.symbol} /> : ''}
        //     {isOver}
        // </div>
        <div ref={drop} role="Space" data-testid={`(${x},${y})`} className="square-empty">
            {children}
        </div>
    )
};