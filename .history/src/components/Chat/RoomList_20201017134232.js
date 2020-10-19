import React from 'react';
import RoomItem from './RoomItem';

export default function RoomList({rooms}) {
    console.log(rooms)
    return (
        <div>
            <RoomItem room={rooms}/>
        </div>
    )
}
