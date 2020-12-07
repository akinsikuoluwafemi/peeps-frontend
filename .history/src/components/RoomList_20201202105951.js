import React from 'react';
import RoomItem from './RoomItem';



export default function RoomList({ allRooms }){
    console.log(allRooms);


    const renderRooms = () => {
        let allRoom = allRoom.map(room => <RoomItem room={room }/>)
    }

    return (
        <div>
            <RoomItem allRoom={ allRooms}/>
        </div>
    )
}