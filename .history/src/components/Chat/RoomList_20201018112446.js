import React from 'react';
import RoomItem from './RoomItem';

export default function RoomList({rooms}) {
    console.log(rooms)

   const renderedList =  rooms.map(() => {
        return  <RoomItem  />;
        
    })
    return (
        <div>
            {/* list */}
            {/* {renderedList} */}
        </div>
    )
}
