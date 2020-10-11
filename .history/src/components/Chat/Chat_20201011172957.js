import React, { useContext, useState } from "react";
import "./Chat.scss";
import chatimg from "../../images/image4.jpg";
import { ChatContext, UserContext } from "../../ContextFile";
import Checkbox from "@material-ui/core/Checkbox";
import { Typography } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export default function Chat() {
  let [checked, setChecked] = useState(false);

  let { showChat, setShowChat } = useContext(ChatContext);

  let { userData, setUserData } = useContext(UserContext);

  const [body, setBody] = useState('');

  console.log(userData.user.created_at);
  console.log(dayjs(userData.user.created_at).);



  const handleChecked = (event) => {
    setChecked(event.target.checked);
    alert(checked);
    console.log("checked");
  };

  const closeChat = () => {
    setShowChat(false);
    console.log(showChat);
  };

  const handleChange = (e) => {
    setBody(e.target.value)
    console.log(body.length)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(body)
    setBody('')
  }
  dayjs.extend(relativeTime);

  return (
    <div className="container chat-height">
      <div className="row no-gutters ">
        <div class="col ">
          <div class="settings-tray">
            <div class="friend-drawer no-gutters friend-drawer--grey d-flex align-items-center ">
              <img class="profile-image" src={chatimg} alt="" />
              <div class="text">
                <h6 className="text-left">Robo Cop</h6>
                <p class="text-muted">
                  Layin' down the law since like before Christ...
                </p>
              </div>
              <span class="settings-tray--right">
                {/* <i class="material-icons">cached</i> */}
                {/* <i class="material-icons">message</i> */}
                <div className="d-flex align-items-center">
                  <Typography>Set to Fufilled</Typography>
                  <Checkbox
                    defaultChecked
                    // defaultChecked={checked}
                    color="primary"
                    value={handleChecked}
                  />

                  <CancelIcon onClick={closeChat} />
                </div>
              </span>
            </div>
          </div>
          <div class="chat-panel">
            <div class="row no-gutters">
              <div class="col-md-3">
                <div class="chat-bubble chat-bubble--left text-left">
                  Hello dude!
                </div>
              </div>
            </div>
            <div class="row no-gutters">
              <div class="col-md-3 offset-md-9">
                <div class="chat-bubble chat-bubble--right text-left">
                  Hello dude!
                </div>
              </div>
            </div>
            <div class="row no-gutters">
              <div class="col-md-3 offset-md-9">
                <div class="chat-bubble chat-bubble--right text-left">
                  Hello dude!
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
            <div class="row no-gutters">
              <div class="col-md-3 offset-md-9">
                <div class="chat-bubble chat-bubble--right text-left">
                  Hello dude!
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
            <div class="row no-gutters">
              <div class="col-md-3 offset-md-9">
                <div class="chat-bubble chat-bubble--right text-left">
                  Hello dude!
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

            <div class="row no-gutters">
              <div class="col-md-3 offset-md-9">
                <div class="chat-bubble chat-bubble--right text-left">
                  Hello dude!
                </div>
              </div>
            </div>
            <form class="row" onSubmit={handleSubmit}>
              <div class="col-12 footer-chat">
                <div class="chat-box-tray">
                  <i class="material-icons">sentiment_very_satisfied</i>
                  <input className="chatbody" onChange={handleChange} value={body} type="text" placeholder="Type your message here..." />
                  <i class="material-icons">mic</i>

                  {body.length > 0 ?
                    <i class="material-icons">send</i>  : null }
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
