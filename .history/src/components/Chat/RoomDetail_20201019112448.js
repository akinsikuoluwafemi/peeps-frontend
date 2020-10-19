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
                      <>
                        {message.user_id === userId ? (
                          <div class="row no-gutters">
                            <div class="col-md-3 offset-md-9">
                              <div class="chat-bubble chat-bubble--right">
                                {message.body}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div class="row no-gutters">
                            <div class="col-md-3 offset-md-9">
                              <div class="chat-bubble chat-bubble--left">
                                {message.body}
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    );
                }

                    
                

                    
                )}
                



      </div>
    </>
  );
}
