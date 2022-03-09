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

    return (
        <div>
            <input type="text" value={value} onChange={changehandler} />
            <button onClick={clickHandler} >button</button>
        </div>
    )
}

export default EventsexEmple;