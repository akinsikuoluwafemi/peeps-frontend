import React, {useEffect, useContext, useState} from 'react';
import axios from 'axios';
import { UserIdContext, RoomDataContext } from "../ContextFile";
import { Link , useHistory} from 'react-router-dom';


export default function RoomItem({ room, onRoomSelect }) {
  
    let history = useHistory();
  
    let { userId, setUserId } = useContext(UserIdContext);
    let { currentRoom, setCurrentRoom } = useContext(RoomDataContext);

  
  console.log(room);

  useEffect(() => {
    
  }, []);


  

    const handleClick=() => {
        // onRoomSelect(room)
        // history.push(`/rooms/${room.id}`)
        alert(room.id, 'i have just changed room')
    }

  return (
    // <p onClick={handleClick}>
    //   <Link to={`/rooms/${room.id}`}>{room.name}</Link>
    //    {room.name}
    //  </p>
    <p onClick={handleClick}>
      <Link to={`/rooms/${room.id}`}>{room.name}</Link>
    </p>
  );
}