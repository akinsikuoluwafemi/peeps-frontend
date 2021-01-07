import React, {useContext, useState, useEffect} from 'react';
import RoomItem from './RoomItem';
import {UserIdContext, AllVolunteerContext} from '../ContextFile';
import axios from 'axios';


export default function RoomList({ allRooms }) {
  
  useEffect(() => {
  },[])
  
  let { userId } = useContext(UserIdContext);
  let [requestToRepublish, setRequestToRepublish] = useState([]);

  let { allVolunteers, setAllVolunteers } = useContext(AllVolunteerContext);
  // console.log(allVolunteers)
  // console.log(allRooms)
  console.log(userd)

  const renderRooms = () => {
    // eslint-disable-next-line array-callback-return
    let allRoom = allRooms.map((room, i,a) => {
      // console.log(a)
      if (room.receiver_id === userId || room.sender_id === userId) {
      //  console.log(room)
        return (
          <span key={room.id} style={{ display: "flex" }}>
            {/* Room {roomCount}:  &nbsp; &nbsp; */}
            <RoomItem allVolunteers={allVolunteers} room={room} />
          </span>
        );
        } 
    //     else {
    //     return (
    //       <p>
    //         You have not volunteered for any request or don't own any request
    //       </p>
    //     );
    //   }
    });
    return allRoom;
  };

  const getAllRequestToRepublish = async () => {
    const token = JSON.parse(localStorage.getItem("token"));

    let res = await axios
      .get("http://localhost:3001/republish/", {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then(
        (response) => {
          //   console.log(response.data);
          let uniqueReq = response.data.filter(
            (item) => item.user_id === userId
          );
          console.log(uniqueReq);

          setRequestToRepublish(uniqueReq);
          return uniqueReq;
        },
        (error) => {
          console.log(error);
        }
      );

    return res;
  };






  return <div>{renderRooms()}</div>;
}
