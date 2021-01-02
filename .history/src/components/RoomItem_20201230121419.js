import React, {useEffect, useContext} from 'react';
import axios from 'axios';
import {
  RoomDataContext,
  AllRequestContext,
  SelectedRequestContext,
} from "../ContextFile";
import { Link} from 'react-router-dom';


export default function RoomItem({ room }) {
  useEffect(() => {
  },[])
    let { currentRoom, setCurrentRoom } = useContext(RoomDataContext);
  let { allRequest, setAllRequest } = useContext(AllRequestContext);
  const { selectedRequest, setSelectedRequest } = useContext(
    SelectedRequestContext
  );
   



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
          // console.log(result.data);

          setCurrentRoom({
            room: result.data,
            messages: result.data.messages,
            users: result.data.users,
          });
        },
        (error) => {
          console.log(error);
        }
      );

    return res;
  };





    const handleClick=() => {
     
      getRoomData(room.id || currentRoom.room.id);
      // console.log(currentRoom.room)
      const getReq = allRequest.find(req => req.description === room.name)
      setSelectedRequest(getReq)
      return getReq

    }

  
  console.log(currentRoom);
  
  
  

  
  return (
    
    <p onClick={handleClick}>
     <Link to={`/rooms/${room.id || currentRoom.room.id}`}>{room.name}</Link>
    </p>
  );
}
