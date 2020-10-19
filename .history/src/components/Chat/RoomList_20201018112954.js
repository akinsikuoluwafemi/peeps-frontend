import React, {useState} from 'react';
import RoomItem from './RoomItem';

export default function RoomList({rooms}) {
    const [renderedList, setRenderedList] = useState([]);

    console.log(rooms)
    if (rooms){
        
    }
  
    return (
        <div>
            {/* list */}
            {renderedList}
        </div>
    )
}
