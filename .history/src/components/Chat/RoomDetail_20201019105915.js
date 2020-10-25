import React, { useContext } from 'react';
import { UserIdContext } from "../../ContextFile";
import relativeTime from "dayjs/plugin/relativeTime";




export default function RoomDetail({ selectedChat }) {
    console.log(selectedChat);

  let { userId, setUserId } = useContext(UserIdContext);

    
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