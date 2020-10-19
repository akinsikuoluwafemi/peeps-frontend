import React from 'react';
import RoomItem from './RoomItem';

export default function RoomList({rooms}) {
    console.log(rooms)

   const renderedList =  rooms.map(() => {
        return  <RoomItem room={}  />;
        
    })
    return (
        <div>
            {renderedList}
        </div>
    )
}
