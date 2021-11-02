import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Square(props) {
    let symbol = props.symbol;
    let className = ""

    if (symbol === 'X') {
        className = "square red"

    } else if (symbol === '1') {
        className = "square black"
    }
    else {
        className = "square white"
    }
    const dispatch = useDispatch()

    return (
        <div onClick={() => {
            dispatch(
                {
                    type: "click",
                    symbol: symbol,
                    x: props.x,
                    y: props.y
                }
            )
        }} className={className}>
        </div>
    )
};