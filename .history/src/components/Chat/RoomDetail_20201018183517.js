import React, { useContext } from 'react';
import { SelectedChatContext } from '../../ContextFile';

export default function RoomDetail() {
    
    let { selectedChat, setSelectedChat } = useContext();
    return (
        <>
            <div className="item--2 inner-two">Content</div>
            
        </>
    );
}
