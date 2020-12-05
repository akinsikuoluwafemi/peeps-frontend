import React, {useEffect, useContext, useState} from 'react';
import axios from 'axios';
import { UserIdContext } from "../ContextFile";
import { Link } from 'react-router-dom';


export default function RoomItem({ room, onRoomSelect }) {
  let { userId, setUserId } = useContext(UserIdContext);

  console.log(room);

  useEffect(() => {}, []);

  return (
    <p onClick={}>
      <Link to={`/rooms/${room.id}`}>{room.name}</Link>
    </p>
  );
}
