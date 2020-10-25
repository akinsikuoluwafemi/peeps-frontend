import React from 'react';
import dayjs from "dayjs";

import relativeTime from "dayjs/plugin/relativeTime";

export default function MessageItem({message}) {
    console.log(message)
    
  dayjs.extend(relativeTime);

    return (
        <div>
            {message.map(message => (
            <div class="row no-gutters">
              <div class="col-md-3 offset-md-9">
                <div class="chat-bubble chat-bubble--right text-right">
                  {message.body}
                <span>{message.created_at}</span>
                </div>
              </div>
            </div>
            ))}
        </div>
    )
}