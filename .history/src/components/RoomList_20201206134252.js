import React, {useContext} from 'react';
import RoomItem from './RoomItem';
import {UserIdContext} from '../ContextFile';



export default function RoomList({ allRooms }) {
  let { userId, setUserId } = useContext(UserIdContext);

  const renderRooms = () => {
    let allRoom = allRooms.map((room, i,a) => {
      let roomCount = i + 1
      console.og(a)
      if (room.receiver_id === userId || room.sender_id === userId) {
        return (
          <span style={{display: 'flex'}}> 
            {/* Room {roomCount}:  &nbsp; &nbsp; */}
            <RoomItem  key={room.id} room={room} />
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
