import React, {useEffect, useContext, useState} from 'react';
import axios from 'axios';
import { UserIdContext, RoomDataContext } from "../ContextFile";
import { Link , useHistory} from 'react-router-dom';


export default function RoomItem({ room }) {
  
    let history = useHistory();
  
    let { userId, setUserId } = useContext(UserIdContext);
    let { currentRoom, setCurrentRoom } = useContext(RoomDataContext);

  

  useEffect(() => {
    
  }, []);


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
            // users: [...currentRoom.users]
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
    }

  return (
    
    <p onClick={handleClick}>
      <Link to={`/rooms/${room.id}`}>{room.name}</Link>
    </p>
  );
}
