import React, {useEffect } from 'react';
import dayjs from "dayjs";
import './Chat.scss';


import relativeTime from "dayjs/plugin/relativeTime";



export default function MessageItem({message}) {
  console.log(message);
  // console.log(dayjs(message.created_at).fromNow());

    
    useEffect(() => {
  
        dayjs.extend(relativeTime);
        
    })
    

  return (
    <div>
      {message.map((message) => (
        
        <div class="row no-gutters ">
          <div class="col-md-3 offset-md-9">
            <div class="chat-bubble chat-bubble--right text-left">
              {message.body} <br />
              <small style={{ color: "#777" }}>
                {dayjs(message.created_at).fromNow()}
              </small>
            </div>
          </div>
        </div>

         <div class="row no-gutters">
              <div class="col-md-3">
                <div class="chat-bubble chat-bubble--left text-left">
                  Hello dude!
                </div>
              </div>
            </div>

        </>
      ))}
    </div>
  );
}
