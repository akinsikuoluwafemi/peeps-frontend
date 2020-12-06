import React, {useContext} from 'react';
import RoomItem from './RoomItem';
import {UserIdContext} from '../ContextFile';



export default function RoomList({ allRooms }) {
  let { userId, setUserId } = useContext(UserIdContext);

  const renderRooms = () => {
    let allRoom = allRooms.map((room, i) => {
      console.log(i + 1)
      //    alert(room.receiver_id + `from roomlist`)
      if (room.receiver_id === userId || room.sender_id === userId) {
        return (
          <>
          <RoomItem  key={room.id} room={room} />
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
