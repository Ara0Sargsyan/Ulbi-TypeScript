import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser,
    onClick: (user: IUser) => void
}

const UserItem: FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div>
            <div onClick={() => onClick(user)} key={user.id} style={{padding: "15px", border: "1px solid black"}}>
                {user.id}, {user.name} mnuma es {user.address.city} qaxaqum es {user.address.street} poxosum
            </div>
        </div>
    )
}

export default UserItem;