import React, { useContext } from 'react';
import { SelectedChatContext } from '../../ContextFile';

export default function RoomDetail() {

  const renderChatMessage = () => {
    selectedChat.map((item) => {
        return <div>{item.body}</div>;
    })
  };

  return (
    <>
      <div className="item--2 inner-two">{renderChatMessage()}</div>
    </>
  );
}
