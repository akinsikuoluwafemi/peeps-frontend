import React from 'react';
import RoomItem from './RoomItem';
import {UserIdContext} from '../ContextFile';



export default function RoomList({ allRooms }){
    let {} = useContext

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
