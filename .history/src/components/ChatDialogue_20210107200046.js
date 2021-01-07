import React, {useContext, useState} from 'react';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import RoomList from './RoomList';
import RepublishRoom from './RepublishRoom'
import { AllRoomContext, RepublishingContext } from "../ContextFile";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function ChatDialogue() {
 
  
  

let {allRooms} = useContext(AllRoomContext)    
  
  let [ requiresRepublishing, setRequiresRepublishing ] = useState(false)


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);

    alert('This is where I set the republishing')
    setRequiresRepublishing(true)

  };

  const handleClose = () => {
    setOpen(false);
  };





 

  

    
    return (
      <RepublishingContext.Provider value={{}}>
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
                <RoomList
                  requiresRepublishing={requiresRepublishing}
                  allRooms={allRooms}
                />
                <RepublishRoom />
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
      </RepublishingContext.Provider>
    );
}
