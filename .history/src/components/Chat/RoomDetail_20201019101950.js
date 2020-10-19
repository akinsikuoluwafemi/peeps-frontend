import React, { useContext } from 'react';
import { SelectedChatContext } from '../../ContextFile';

export default function RoomDetail({ selectedChat }) {
  console.log(selectedChat);

  const renderChatMessage = () => {
    selectedChat.map((item) => {
        return (
          
      ) ;
    });
  };

  return (
    <>
      <div className="item--2 inner-two">{renderChatMessage()}</div>
    </>
  );
}
