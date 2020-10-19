import React from 'react';
import RoomItem from './RoomItem'

export default function RoomList(props.rooms) {
    console.log(props.rooms)
    return (
        <div>
            RoomList{props.rooms.length}
        </div>
    )
}
