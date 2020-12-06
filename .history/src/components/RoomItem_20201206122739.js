import React, {useEffect, useContext, useState} from 'react';
import axios from 'axios';
import { UserIdContext, RoomDataContext , ReqOwnerFirstNameContext} from "../ContextFile";
import { Link } from 'react-router-dom';


export default function RoomItem({ room }) {
  
  
    let { currentRoom, setCurrentRoom } = useContext(RoomDataContext);
    let { reqOwnerFirstName, setReqOwnerFirstName } = useContext(ReqOwnerFirstNameContext);

  


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

  
    const getRecipient = () => {
    if(currentRoom.room.users){
      let recipient = currentRoom.room.users.filter(user => user.id !== userId)
      let recipientName = recipient.map(item => item.first_name)
      setReqOwnerFirstName(recipientName[0]);
    }
    
  }
  
  

  
  return (
    <p onClick={handleClick}>
      YOU AND `{reqOwnerFirstName}`{" "}
      <Link to={`/rooms/${room.id}`}>{room.name}</Link>
    </p>
  );
}
