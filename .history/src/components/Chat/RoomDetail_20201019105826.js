import React, { useContext } from 'react';
import { UserIdContext } from "../../ContextFile";


export default function RoomDetail({ selectedChat }) {
    console.log(selectedChat);
    return (
    <>
      <div className="item--2 inner-two">

                {selectedChat.map(item => (
                    
                <div class="row no-gutters">
                    <div class="col-md-3 offset-md-9">
                        <div class="chat-bubble chat-bubble--right">{item.body}</div>
                    </div>
                </div>
                ))}
                



      </div>
    </>
  );
}
