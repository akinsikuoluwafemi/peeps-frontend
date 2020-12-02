import React from 'react';
import RoomItem from './RoomItem';



export default function RoomList({ allRooms }){
    console.log(allRooms);


    const renderRooms = () => {
        
    }

    return (
        <div>
            <RoomItem allRoom={ allRooms}/>
        </div>
    )
}
