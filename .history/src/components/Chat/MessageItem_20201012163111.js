import React from 'react';
import dayjs from "dayjs";
import './Chat.scss';


import relativeTime from "dayjs/plugin/relativeTime";

export default function MessageItem({message}) {
  console.log(message);
  // console.log(dayjs(message.created_at).fromNow());

  dayjs.extend(relativeTime);

  return (
    <div>
      {message.map((message) => (
        <div class="row no-gutters">
          <div class="col-md-3 offset-md-9">
            <div class="chat-bubble chat-bubble--right text-right">
              {message.body} <br/>
              <sm className="time">{dayjs(message.created_at).fromNow()}</sm>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
