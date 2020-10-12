import React, { useContext, useState } from "react";
import "./Chat.scss";
import chatimg from "../../images/image4.jpg";
import { ChatContext, UserContext, UserIdContext, FirstNameContext } from "../../ContextFile";
import Checkbox from "@material-ui/core/Checkbox";
import { Typography } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import axios from 'axios';



export default function Chat() {
  let [checked, setChecked] = useState(false);

  let { showChat, setShowChat } = useContext(ChatContext);

  let { userData, setUserData } = useContext(UserContext);

  let { userId, setUserId } = useContext(UserIdContext);

  let { reqOwnerFirstName, setReqOwnerFirstName } = useContext(ReqOwnerFirstNameContext);
  let {firstName} = useContext()
  console.log(userId);

  const [body, setBody] = useState('');

  console.log(userData.user);
  // console.log(dayjs(userData.user.created_at).fromNow());
 


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
  }

  const handleClick = (e) => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);

    let message = {
      body,
      user_id: userId,
    };
    console.log(message);

    let res = axios
      .post("http://localhost:3001/messages", message, {
        headers: {
          Authorization: `Basic ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then(
        (response) => {
          console.log("Success", response.data);
          setBody("");
        },
        (error) => {
          console.error("Error", error);
        }
      );

    return res;

  };

  const handleSubmit = (e) => {
     const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
    
    let message = {
      body,
      user_id: userId
    }
    console.log(message);
    e.preventDefault()

    let res = axios
      .post("http://localhost:3001/messages", message, {
        headers: {
          "Authorization": `Basic ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then(
        (response) => {
          console.log("Success", response.data);
          setBody("");
        },
        (error) => {
          console.error("Error", error);
        }
      );

    return res;
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
                    <i style={{cursor: 'pointer'}} onClick={handleClick} class="material-icons">send</i>  : null }
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
