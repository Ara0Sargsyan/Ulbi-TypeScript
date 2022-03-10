import React, {FC, useRef, useState} from 'react';
import {IUser} from "../types/types";

const EventsexEmple: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changehandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value);
    }

    const dragHandler = (e:React.DragEvent<HTMLDivElement>) => {
        // console.log("cl");
    }

    const dropHaqndler = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const leaveHandler = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const dragWithPreventHandler = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    return (
        <div>
            <input type="text" value={value} onChange={changehandler} placeholder={"upravlaemi"} />
            <input type="text" ref={inputRef} placeholder={"neupravlaemi"} />
            <button onClick={clickHandler} >button</button>
            <div
                style={{width: 200, height: 200, background: "red" }}
                draggable
                onDrag={dragHandler}
            >
            </div>
            <div
                style={{width: 200, height: 200, background: isDrag? "green" : "red", marginTop: "10px" }}
                onDrop={dropHaqndler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
            >
            </div>
        </div>
    )
}

export default EventsexEmple;
