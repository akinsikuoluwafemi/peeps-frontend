import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";



export default function CreateRoomModal() {
    
    const [roomName, setRoomName] = useState('')

    const handleRoomChange = (e) => {
        setRoomName(e.target.value);
    }

    const handleClick = (e) => {
        console.log(roomName);

        let room = {
            name: roomName
        }

        console.log(room);

        



    }

    return (
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Create a Chat room for you and the requester.
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <TextField
                id="firstName"
                name="firstName"
                type="firstName"
                label="Room Name"
                value={roomName}
                onChange={handleRoomChange}
                fullWidth
                required
              />
            </div>
            <div class="modal-footer">
              {roomName.length > 3 && (
                <button
                  onClick={handleClick}
                  type="button"
                  class="btn btn-primary"
                  data-dismiss="modal"
                >
                  Create
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}
