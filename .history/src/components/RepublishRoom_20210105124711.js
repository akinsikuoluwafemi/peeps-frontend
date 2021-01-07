import React, { useContext, useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import { UserIdContext, RepublishRequestContext } from "../ContextFile";
import axios from "axios";
import MenuList from "./MenuList";

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  useEffect(() => {}, []);

  const [oldUserRequest, setOldUserRequest] = useState([]);

  let { userId, setUserId } = useContext(UserIdContext);
  let [requestToRepublish, setRequestToRepublish] = useState([]);
  

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    getAllRequestToRepublish();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderRequestToPublish = () => {
    return <MenuList requests={requestToRepublish} />;
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Button variant="contained" color="primary">
          Republish Request
        </Button>
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "350px",
          },
        }}
      >
        {renderRequestToPublish()}
      </Menu>
    </div>
  );
}
