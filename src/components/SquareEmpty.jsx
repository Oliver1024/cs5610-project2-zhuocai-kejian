import React from "react";
import { ItemTypes } from "components/ItemTypes"
import { useSelector, useDispatch } from "react-redux";
import SquareTest from 'components/SquareTest'
import SquareTest2 from 'components/SquareTest2'
import { useDrop } from 'react-dnd'

export default function SquareEmpty(props) {
    const x = props.x;
    const y = props.y;
    const dispatch = useDispatch()
    const item = useSelector((state) => state.dragItem)
    const boardState = useSelector((state) => state.drag)
    
    // const isSquareHere = x === itemPosition[0] && y === itemPosition[1]
    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: ItemTypes.SQUARE,
        canDrop: () => {
            if (x - 2 >= 0 && x + 2 < boardState.length) return true;
            else return false;
        },
        drop: () => dispatch(
            {
                type: "dragEnd",
                x: x,
                y: y,
                symbol: item
            }
        ),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        }),
    }), [x, y])

    return (
        <div ref={drop} className="square-empty" >
            {props.symbol === "5" ? <SquareTest symbol={props.symbol} /> : ''}
            {props.symbol === "4" ? <SquareTest2 symbol={props.symbol} /> : ''}
            {isOver}
        </div>
    )
};