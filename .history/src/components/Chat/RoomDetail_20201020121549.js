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
                              <div class="chat-bubble chat-bubble--right text-left">
                                <span class="badge badge-">You</span>
                                {message.body} <br />
                                <small style={{ color: "#777" }}>
                                  {dayjs(message.created_at).fromNow()}
                                </small>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div class="row no-gutters">
                            <div class="col-md-3 ">
                              <div class="chat-bubble chat-bubble--left text-left">
                                {message.body} <br />
                                <small style={{ color: "#777" }}>
                                  {dayjs(message.created_at).fromNow()}
                                </small>
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
