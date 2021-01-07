import React, { useContext, useState, useEffect} from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import {UserIdContext, RepublishRequestContext} from '../ContextFile'


const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
   useEffect(() => {
   },[])
   
    const [oldUserRequest, setOldUserRequest] = useState([]);


  let { userId, setUserId } = useContext(UserIdContext);
    let { requestToRepublish, setRequestToRepublish } = useContext(RepublishRequestContext);
    // console.log(userId);
    // console.log(requestToRepublish);

    const getUserRequestToPublish = () => {
        let oldRequest = requestToRepublish.filter(item => item.user_id === userId)
        console.log(oldRequest)
        // setOldUserRequest(oldUserRequest)
    }
  
       getUserRequestToPublish();

  
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    
const 
    

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
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
