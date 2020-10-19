import React, { useContext, useEffect } from 'react';
import { UserIdContext } from "../../ContextFile";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";




export default function RoomDetail({ selectedChat }) {
    console.log(selectedChat);

  let { userId, setUserId } = useContext(UserIdContext);

    console.log(userId);

    useEffect(() => {
      dayjs.extend(relativeTime);
    });
    return (
    <>
      <div className="item--2 inner-two">

                {selectedChat.map(message =>  {
                    return (
                        
                    )
                }

                    
                

                    
                )}
                



      </div>
    </>
  );
}
