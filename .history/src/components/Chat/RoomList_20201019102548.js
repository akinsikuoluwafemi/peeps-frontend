import React, {useState, useContext} from 'react';
import RoomItem from './RoomItem';
import { SelectedChatContext } from '../../ContextFile';

export default function RoomList({ rooms, onRoomSelect,  }) {
  console.log(rooms);

    let { selectedChat, setSelectedChat } = useContext(SelectedChatContext);

  const renderedList = rooms.map((room) => {
    return <RoomItem onRoomSelect={onRoomSelect}  room={room} selectedChat={selectedChat} />;
  });
  return <div>{renderedList}</div>;
}
