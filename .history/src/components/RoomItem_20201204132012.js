import React, {useEffect, useContext, useState} from 'react';
import axios from 'axios';
import { UserIdContext } from "../ContextFile";
import { Link } from 'react-router-dom';


export default function RoomItem({ room, onRoomSelect }) {
  let { userId, setUserId } = useContext(UserIdContext);

  console.log(room);

  useEffect(() => {}, []);

    const handleClick=() => {
        
    }

  return (
    <p onClick={() => onRoomSelect(room)}>
      <Link to={`/rooms/${room.id}`}>{room.name}</Link>
    </p>
  );
}
