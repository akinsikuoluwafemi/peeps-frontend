import React from 'react';
import RoomItem from './RoomItem';

export default function RoomList({rooms}) {
    console.log(props.rooms)
    return (
        <div>
            <RoomItem room={rooms}/>
        </div>
    )
}
