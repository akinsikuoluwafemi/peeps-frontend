import React from 'react';
import RoomItem from './RoomItem';

export default function RoomList({rooms}) {
    console.log(rooms)

    rooms.map(() => {
        return    <RoomItem room={rooms} />;
        
    })
    return (
        <div>
        </div>
    )
}
