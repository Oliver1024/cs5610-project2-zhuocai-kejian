import React, { useState } from "react";
import SquareDraggable from "components/SquareDraggable";
import { ItemTypes } from "components/ItemTypes";

import { useDrag } from 'react-dnd'
import { useDispatch } from "react-redux";


function Cow() {
    const symbol = "cow"

    const [{ pos }, drag] = useDrag(() => ({
        type: ItemTypes.SQUARE,
        item: { id: symbol },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
            pos: monitor.getClientOffset()
        })
    }))



    return (
        <div className="cow"ref={drag} >
            <SquareDraggable symbol={symbol} />
            <SquareDraggable symbol={symbol} />
        </div>
    )
}

export default Cow
