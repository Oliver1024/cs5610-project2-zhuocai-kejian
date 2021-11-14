import React, { useState } from "react";
import { ItemTypes } from "components/ItemTypes";
import { useSelector, useDispatch } from "react-redux";
import Sheep from "components/Sheep"
import Pig from "components/Pig"
import Cow from "components/Cow"

import { useDrop, useDrag } from 'react-dnd'

export default function Square({ containers, boardstate, symbol, children, x, y }) {
    const draggingItem = useSelector((state) => state.dragItem)
    const dispatch = useDispatch()

    const [{ a, pos }, drop] = useDrop(() => ({
        accept: ItemTypes.SQUARE,
        canDrop: () => true,
        drop: (item) => {
            containers.movePosition(item.id, x, y)
        },
        collect: (monitor) => ({
            a: monitor.getItem(),
            pos: monitor.getClientOffset()
        })
    }))

    let isSquareHere = 0;
    const positions = containers.positions
    if (positions["sheep"][0] === x && positions["sheep"][1] === y) {
        isSquareHere = 1;
    } else if (positions["pig"][0] === x && positions["pig"][1] === y) {
        isSquareHere = 2;
    } else if (positions["cow"][0] === x && positions["cow"][1] === y) {
        isSquareHere = 3;
    } else {
        isSquareHere = 0;
    }

    function renderSquare(isSquareHere) {
        if (isSquareHere === 1) {
            return (<Sheep />)
        } else if (isSquareHere === 2) {
            return (<Pig />)
        } else if (isSquareHere === 3) {
            return (<Cow />)
        } else return ("")
    }

    return (
        <div ref={drop} className="square-empty">
            {renderSquare(isSquareHere)}
        </div>
    )
};