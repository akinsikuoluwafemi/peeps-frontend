import React, {useContext, useState, useEffect, useCallback} from 'react';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import RoomList from './RoomList';
import { AllRoomContext, DeactivateContext, UserIdContext
,RoomToShowContext

} from "../ContextFile";
import axios from "axios";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});




export default function ChatDialogue() {
 
  useEffect(() => {

  },[])

let {allRooms} = useContext(AllRoomContext)    
  let [requestToRepublish, setRequestToRepublish] = useState([]);
  let { userId } = useContext(UserIdContext)
  
  let { deactivate, setDeactivate } = useContext(DeactivateContext);
  let [reqToRemoveRooms, setReqToRemoveRooms] = useState([]);
  let [roomToShow, setRoomToShow] = useState([])

  let [successRepReq, setSuccessRepReq] = useState([]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);


    // console.log(successRepReq);
    SuccessAndRepublish();


   

  };

  const handleClose = () => {
    setOpen(false);
  };

  const roomsToShowAfterFulfilled = () => {
  
    let allReq = reqToRemoveRooms.map((req) => {
      // console.log(req.description);

      let aRooms = allRooms.filter(room => {
        return room.name !== req.description
      })
      // console.log(aRooms)
      if(open === true){
      setRoomToShow(aRooms)
        
      }

    });

    return allReq;

      
  };

  
    
      
    const changeRoom = useCallback(() => {
      roomsToShowAfterFulfilled();

    })

    if(open === true){
    // changeRoom();
      
    }
  
  
    





  const SuccessAndRepublish = async () => {
    const token = JSON.parse(localStorage.getItem("token"));

    let res = await axios
      .get("http://localhost:3001/successandrepublish", {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then(
        (response) => {
          //  console.log(response.data);
          let filterReq = response.data.filter(req => req.user_id === userId)
          consol
          setSuccessRepReq(filterReq);
        },
        (error) => {
          console.log(error);
        }
      );

    return res;
  };

 
    

    
    return (
      <RoomToShowContext.Provider value={{roomToShow, setRoomToShow}}>
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
            <DialogTitle id="alert-dialog-slide-title">
              {"ChatRooms"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <RoomList allRooms={allRooms} roomToShoww={roomToShow} />
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
      </RoomToShowContext.Provider>
    );
}
