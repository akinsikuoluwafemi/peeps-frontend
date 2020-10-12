import React from 'react';

export default function MessageItem({message}) {
    console.log(message)
    return (
        <div>
            {message.map(message => (
            <div class="row no-gutters">
              <div class="col-md-3 offset-md-9">
                <div class="chat-bubble chat-bubble--right text-lef">
                  {message.body}
                </div>
              </div>
            </div>
            ))}
        </div>
    )
}
