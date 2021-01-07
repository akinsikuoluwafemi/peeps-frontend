import React, {useContext, useState, useEffect} from 'react';
import RoomItem from './RoomItem';
import {UserIdContext, AllVolunteerContext} from '../ContextFile';


export default function RoomList({ allRooms, reqToRemoveRooms }) {
  useEffect(() => {}, []);

  let { userId } = useContext(UserIdContext);

  let { allVolunteers, setAllVolunteers } = useContext(AllVolunteerContext);
  // console.log(allVolunteers)
  console.log(allRooms)
  console.log(reqToRemoveRooms);


  const roomsToShowAfterFulfilled = () => {
    const allRoom = allRooms.filter(room => {
      
      const allReq = reqToRemoveRooms.filter(req => {
        let showRoom = room.name !== req.description
        console.log(showRoom)
      })
      return allReq


    })
    return
  }


  const renderRooms = () => {
    // eslint-disable-next-line array-callback-return
    let allRoom = allRooms.map((room, i, a) => {
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




  return <div>{renderRooms()}</div>;
}
