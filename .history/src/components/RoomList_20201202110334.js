import React from 'react';
import RoomItem from './RoomItem';



export default function RoomList({ allRooms }){


    const renderRooms = () => {
        let allRoom = allRooms.map(room => {
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
