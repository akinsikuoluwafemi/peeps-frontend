import React, {useState, useContext} from 'react';
import RoomItem from './RoomItem';
import { SelectedChatContext, UserIdContext, AllUserIdContext } from '../../ContextFile';

export default function RoomList({ rooms, onRoomSelect }) {
  
  console.log(rooms);

  let { allUserId, setAllUserId } = useContext(AllUserIdContext);

  let { chatReceiverId, setChatReceiverId } = useContext(RequestOwnerIdContext);

 

  const renderedList = rooms.map((room) => {
    
    return (
      <RoomItem allUserId={allUserId} SelectedChatContext={SelectedChatContext} onRoomSelect={onRoomSelect} room={room} />
    );

  });
  return <div>{renderedList}</div>;
}
