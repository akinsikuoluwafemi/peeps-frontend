import React, {useEffect, useContext, useState} from 'react';
import axios from 'axios';
import { UserIdContext } from "../ContextFile";


export default function RoomItem({room}) {
    let { userId, setUserId } = useContext(UserIdContext);
    
    const [roomReceiver, setRoomReceiver] = useState(0);

    
    console.log(room)
    if(userId === room.sender_id){
        alert('you are the sender')
        setRoomReceiver(room.)
    }else {
        alert('you are the receiver')
    }

    useEffect(() => {
        getRoomUsers(6)
    }, [])

    const getRoomUsers = async (id) => {
      const token = JSON.parse(localStorage.getItem("token"));

      let res = await axios
        .get(`http://localhost:3001/users/${id}`, {
          headers: {
            Authorization: `Basic ${token}`,
          },
        })
        .then(
          (response) => {
            console.log(response.data);
          },
          (error) => {
            console.log(error);
          }
        );
      return res;
  };




    return (
        <div>
            {room.name}
        </div>
    )
}
