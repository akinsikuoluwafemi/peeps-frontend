import React, { useContext } from 'react';
import { SelectedChatContext } from '../../ContextFile';

export default function RoomDetail() {
    
    let { selectedChat, setSelectedChat } = useContext(SelectedChatContext);
    console.log(selectedChat);

    const renderChatMessage = () => {
        
    }

    return (
        <>
            <div className="item--2 inner-two">Content</div>
            
        </>
    );
}