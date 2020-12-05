import React, {useContext} from 'react';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import RoomList from './RoomList';
import { AllRoomContext, SelectedRoomContext } from "../ContextFile";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});




export default function ChatDialogue() {
 
let {allRooms, setAllRooms} = useContext(AllRoomContext)    
let { selectedRoom, setSelectedRoom } = useContext(SelectedRoomContext);

    
 const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    
  const onRoomSelect = (room) => {
    setSelectedRoom(room)
    console.log(selectedRoom, 'from ')
  }
    
    
    return (
      <div>
        <Button variant="outlined" color="primary" className="text-white" onClick={handleClickOpen}>
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
              <RoomList onRoomSelect={onRoomSelect} allRooms={allRooms}/>
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
