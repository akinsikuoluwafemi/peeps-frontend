import React, {useEffect, useContext, useState} from 'react';
import axios from 'axios';
import { UserIdContext } from "../ContextFile";
import { Link , useHistory} from 'react-router-dom';


export default function RoomItem({ room, onRoomSelect }) {
  
    let history = useHistory();
  
    let { userId, setUserId } = useContext(UserIdContext);

  console.log(room);

  useEffect(() => {}, []);

    const handleClick=() => {
        onRoomSelect(room)
        // history.push(`/rooms/${room.id}`)
    }

  return (
    <p onClick={handleClick}>
      {/* <Link to={`/rooms/${room.id}`}>{room.name}</Link> */}
      {room.name}</Link>
    </p>
  );
}
