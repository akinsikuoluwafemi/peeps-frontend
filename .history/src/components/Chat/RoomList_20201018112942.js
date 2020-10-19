import React, {useState} from 'react';
import RoomItem from './RoomItem';

export default function RoomList({rooms}) {
    const [renderedList, setrenderedList] = useState([]);

    console.log(rooms)
    if (rooms){
        
    }
   const renderedList =  rooms.map(() => {
        return  <RoomItem  />;
        
    })
    return (
        <div>
            {/* list */}
            {renderedList}
        </div>
    )
}
