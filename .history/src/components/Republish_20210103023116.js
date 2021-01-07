import React, { useContext, useState, useEffect} from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import {UserIdContext, RepublishRequestContext} from '../ContextFile'
import axios from 'axios';

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
    useEffect(() =>
    {
      getAllRequestToRepublish();
    }, []);

  const [oldUserRequest, setOldUserRequest] = useState([]);

  let { userId, setUserId } = useContext(UserIdContext);
  let [ requestToRepublish, setRequestToRepublish ] = useState([])
//   console.log(userId);
//   console.log(requestToRepublish);

  // request greater that 24hrs, are not fulfilled and have less than 5 volunteers
  const getAllRequestToRepublish = async () => {
    
      const token = JSON.parse(localStorage.getItem("token"));
   
   
      let res = await axios
      .get("http://localhost:3001/republish/", {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then(
        (response) => {
          console.log(response.data);
          let uniqueReq = response.data.filter(
            (item) => item.user_id === userId
          );
          console.log(uniqueReq);

          setRequestToRepublish(uniqueReq);
        },
        (error) => {
          console.log(error);
        }
      );

    return res;
  };

    // getAllRequestToRepublish();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRequestDetails = () => {
    alert("i did it");
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
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleRequestDetails}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
