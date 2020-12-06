import React, {useEffect, useContext, useState} from 'react';
import axios from 'axios';
import { UserIdContext, RoomDataContext , ReqOw} from "../ContextFile";
import { Link } from 'react-router-dom';


export default function RoomItem({ room }) {
  
  
    let { currentRoom, setCurrentRoom } = useContext(RoomDataContext);

  


  const getRoomData = async (id) => {
    const token = JSON.parse(localStorage.getItem("token"));

    let res = await axios
      .get(`http://localhost:3001/rooms/${id}`, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then(
        (result) => {
          console.log(result.data);

          setCurrentRoom({
            room: result.data,
            messages: result.data.messages,
            users: result.data.users
          });
        },
        (error) => {
          console.log(error);
        }
      );

    return res;
  };

    const handleClick=() => {
      getRoomData(room.id)
      console.log(currentRoom.room)
    }
      console.log(currentRoom.room);

  return (
    
    <p onClick={handleClick}>
    YOU AND <Link to={`/rooms/${room.id}`}>{room.name}</Link>
    </p>
  );
}
