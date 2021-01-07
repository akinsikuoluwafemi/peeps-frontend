import React, {useContext, useState, useEffect} from 'react';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import RoomList from './RoomList';
import { AllRoomContext, DeactivateContext, UserIdContext } from "../ContextFile";
import axios from "axios";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});




export default function ChatDialogue() {
 
  useEffect(() => {
    Success()
  },[])

let {allRooms} = useContext(AllRoomContext)    
  let [requestToRepublish, setRequestToRepublish] = useState([]);
  let { userId } = useContext(UserIdContext)
  
  let { deactivate, setDeactivate } = useContext(DeactivateContext);
  let [reqToRemoveRooms, setReqToRemoveRooms] = useState([]);


  let [successReq, setSuccessReq] = useState([]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);

    getAllRequestToRepublish()
    roomsToShowAfterFulfilled()

  };

  const handleClose = () => {
    setOpen(false);
  };

  const roomsToShowAfterFulfilled = () => {
    const allRoom = allRooms.filter((room) => {
      let allReq = reqToRemoveRooms.map(req => ro )
    //   const allReq = reqToRemoveRooms.filter((req) => {
    //     let showRoom = room.name !== req.description;
    //     console.log(showRoom);
    //   });
    //   return allReq;
    // });
    // console.log(allRoom);
      
  };
    

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
          //   console.log(response.data);
          let uniqueReq = response.data.filter(
            (item) => item.user_id === userId
          );

          let tempReqRoom = [...uniqueReq, ...successReq ]
          // alert(tempReqRoom.length)
          setReqToRemoveRooms(tempReqRoom);
          // console.log(uniqueReq);

          setRequestToRepublish(uniqueReq);
          return uniqueReq;
        },
        (error) => {
          console.log(error);
        }
      );

    return res;
  };



  const Success = async () => {
    const token = JSON.parse(localStorage.getItem("token"));

    let res = await axios
      .get("http://localhost:3001/success", {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then(
        (response) => {
          //  console.log(response.data);
           setSuccessReq(response.data);
        },
        (error) => {
          console.log(error);
        }
      );

    return res;
  };

 
    

    
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          className="text-bold"
          onClick={handleClickOpen}
        >
          Rooms
        </Button>

        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{"ChatRooms"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <RoomList allRooms={allRooms} reqToRemoveRooms={reqToRemoveRooms} />
            </DialogContentText>
          </DialogContent>
          {/* <DialogActions>
            <Button onClick={handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={handleClose} color="primary">
              Agree
            </Button>
          </DialogActions> */}
        </Dialog>
      </div>
    );
}
