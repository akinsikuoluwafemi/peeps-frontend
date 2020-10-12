import React from 'react';
import MessageItem from './MessageItem';


export default function MessageList({messages}) {
    return (
        <div>
            <MessageItem message={messages}/>
        </div>
    )
}
