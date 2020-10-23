import React, {useState, useContext} from 'react';
import RoomItem from './RoomItem';
import { SelectedChatContext, UserIdContext } from '../../ContextFile';

export default function RoomList({ rooms, onRoomSelect }) {
  console.log(rooms);

  let { userId, setUserId } = useContext(UserIdContext);


  console.log(allUserId);

  const renderedList = rooms.map((room) => {
    return (
      <RoomItem SelectedChatContext={SelectedChatContext} onRoomSelect={onRoomSelect} room={room} />
    );
  });
  return <div>{renderedList}</div>;
}
