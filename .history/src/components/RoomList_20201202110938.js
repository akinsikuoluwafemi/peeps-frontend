import React, {useContext} from 'react';
import RoomItem from './RoomItem';
import {UserIdContext} from '../ContextFile';



export default function RoomList({ allRooms }){
    let { userId, setUserId } = useContext(UserIdContext);

    console.log(userId)

    const renderRooms = () => {
        let allRoom = allRooms.map(room => {
            if(room.receiver_id ==-)
            return <RoomItem key={room.id} room={room} />;
        })
        return allRoom
    }

    return (
        <div>
            {renderRooms()}
        </div>
    )
}
