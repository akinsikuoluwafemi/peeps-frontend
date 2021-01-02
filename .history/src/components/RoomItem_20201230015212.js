import React, {useEffect, useContext} from 'react';
import axios from 'axios';
import {
  RoomDataContext,
  AllRequestContext,
  SelectedRequestContext,
  ReqOwnerFirstNameContext,
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
    const { reqOwnerFirstName, setReqOwnerFirstName } = useContext(
      ReqOwnerFirstNameContext
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


  const getRequestOwner = async (id) => {
    if (id) {
      const token = JSON.parse(localStorage.getItem("token"));

      let res = await axios
        .get(`http://localhost:3001/users/${id}`, {
          headers: {
            Authorization: `Basic ${token}`,
          },
        })
        .then(
          (response) => {
            console.log(response.data.first_name);
            let ownerRec = Object.values(response.data);
            // setChatReceiverId(ownerRec[0]);
            setReqOwnerFirstName(ownerRec[1]);
          },
          (error) => {
            console.log(error);
          }
        );
      return res;
    }
  };



    const handleClick=() => {
     
      getRoomData(room.id || currentRoom.room.id);
      // console.log(currentRoom.room)
      const getReq = allRequest.find(req => req.description === room.name)
      console.log(getReq)
      setSelectedRequest(getReq)
      getRequestOwner(getReq.id)
      return getReq

    }

  
  
  
  

  
  return (
    
    <p onClick={handleClick}>
     <Link to={`/rooms/${room.id || currentRoom.room.id}`}>{room.name}</Link>
    </p>
  );
}
