import React from "react";
import { ItemTypes } from "components/ItemTypes"
import { useSelector, useDispatch } from "react-redux";
import { useDrag } from 'react-dnd'

export default function Square(props) {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.SQUARE,
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    const dispatch = useDispatch()


    return (
        <span ref={drag} className="boat4 red" onDragStart={dispatch({
            type: "dragStart",
            symbol: props.symbol
        })}>
        </span>
    )
};