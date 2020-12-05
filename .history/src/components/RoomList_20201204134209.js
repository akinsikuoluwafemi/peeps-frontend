import React, {useContext} from 'react';
import RoomItem from './RoomItem';
import {UserIdContext} from '../ContextFile';



export default function RoomList({ allRooms, onRoomSelect, selectedRoom }) {
  let { userId, setUserId } = useContext(UserIdContext);
  console.log(selectedRoom, "from romlist");
  // console.log(allRooms)

  const renderRooms = () => {
    let allRoom = allRooms.map((room) => {
      //    alert(room.receiver_id + `from roomlist`)
      
        if (selectedRoom.receiver_id === userId || selectedRoom.sender_id === userId)
        {
        return (
          <RoomItem onRoomSelect={onRoomSelect} key={room.id} room={room} />
        );
      } else {
        return (
          <p>
            You have not volunteered for any request or don't own any request
          </p>
        );
      }
    });
    return allRoom;
  };

  return <div>{renderRooms()}</div>;
}
