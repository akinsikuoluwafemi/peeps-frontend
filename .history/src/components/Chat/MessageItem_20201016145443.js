import React, {useEffect, useContext } from 'react';
import dayjs from "dayjs";
import './Chat.scss';
import { UserIdContext } from '../../ContextFile';




import relativeTime from "dayjs/plugin/relativeTime";



export default function MessageItem({message}) {
  
  let { userId, setUserId } = useContext(UserIdContext);
  console.log(userId)

  console.log(message);
  // console.log(dayjs(message.created_at).fromNow());

    
    useEffect(() => {
  
        dayjs.extend(relativeTime);
        
    })
  
  cons
    

  return (
    <div>
      {message.map((message) => {
        return (
        // <>
        <div class="row no-gutters ">
          <div class="col-md-3 offset-md-9">
            <div class={`chat-bubble chat-bubble--right text-left`}>
              {message.body} <br />
              <small style={{ color: "#777"}}>
                {dayjs(message.created_at).fromNow()}
                {message.user_id}
              </small>
            </div>
          </div>
        </div>    
  )
      } 
      
      )
}
    </div>
  );
}
