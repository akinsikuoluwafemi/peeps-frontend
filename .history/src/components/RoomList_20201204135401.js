import React, {useContext} from 'react';
import RoomItem from './RoomItem';
import {UserIdContext} from '../ContextFile';



export default function RoomList({ allRooms, onRoomSelect, selectedRoom }) {
  let { userId, setUserId } = useContext(UserIdContext);
  console.log(selectedRoom, "from romlist");

  const renderRooms = () => {
    let allRoom = allRooms.map((room) => {
      //    alert(room.receiver_id + `from roomlist`)
      if (room.receiver_id === userId || room.sender_id === userId) {
        return (
          <RoomItem onRoomSelect={onRoomSelect} key={room.id} room={room} />
        );
        } 
        
    });
    return allRoom;
  };

  return <div>{renderRooms()}</div>;
}
