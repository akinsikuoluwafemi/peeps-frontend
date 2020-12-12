import React, {useContext} from 'react';
import RoomItem from './RoomItem';
import {UserIdContext} from '../ContextFile';



export default function RoomList({ allRooms }) {
  let { userId } = useContext(UserIdContext);

  const renderRooms = () => {
    // eslint-disable-next-line array-callback-return
    let allRoom = allRooms.map((room, i,a) => {
      // console.log(a)
      if (room.receiver_id === userId || room.sender_id === userId) {
      //  console.log(room)
        return (
          <span key={room.id} style={{display: 'flex'}}> 
            {/* Room {roomCount}:  &nbsp; &nbsp; */}
            <RoomItem  room={room} />
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
