import React, {FC, useState} from 'react';
import {IUser} from "../types/types";

const EventsexEmple: FC = () => {
const [value, setValue] = useState<string>('')

    const changehandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);
    }

    const draghandler = (e:React.DragEvent<HTMLDivElement>) => {
        console.log("cl");
    }

    return (
        <div>
            <input type="text" value={value} onChange={changehandler} />
            <button onClick={clickHandler} >button</button>
            <div
                style={{width: 200, height: 200, background: "red" }}
                draggable
                onDrag={draghandler}
            >
            </div>
            <div
                style={{width: 200, height: 200, background: "red", marginTop: "10px" }}
            >
            </div>
        </div>
    )
}

export default EventsexEmple;