import React from "react";
import { ItemTypes } from "components/ItemTypes"
import { useSelector, useDispatch } from "react-redux";
import { useDrag } from 'react-dnd'

export default function Square(props) {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.SQUARE,
        item: {props},
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    const dispatch = useDispatch()
    dispatch({
        type: "dragStart",
        symbol: props.symbol
    })

    return (
        <span ref={drag} className="boat5 red">
        </span>
    )
};