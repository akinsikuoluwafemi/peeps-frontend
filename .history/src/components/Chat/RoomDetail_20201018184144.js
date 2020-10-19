import React, { useContext } from 'react';
import { SelectedChatContext } from '../../ContextFile';

export default function RoomDetail() {
    
    let { selectedChat, setSelectedChat } = useContext(SelectedChatContext);
    console.log(selectedChat);

    const renderChatMessage = () => {
        selectedChat.map(item => {
            return (
            <div>{item}</div></div>
            )
        })
    }

    return (
        <>
            <div className="item--2 inner-two">Content</div>
            
        </>
    );
}
