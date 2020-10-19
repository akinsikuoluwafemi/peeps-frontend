import React, {useState, useContext} from 'react';
import TextField from "@material-ui/core/TextField";
import axios from 'axios';
import { AllRoomContext } from '../../ContextFile';


export default function CreateRoomModal() {
    
  const [roomName, setRoomName] = useState('');

    // let { allRooms, setAllRooms } = useContext(AllRoomContext);

    // console.log(allRooms);
    const handleRoomChange = (e) => {
        setRoomName(e.target.value);
    }

    const handleClick = (e) => {
        console.log(roomName);

        let roomObj = {
            name: roomName
        }

        console.log(roomObj);
        // let tempArray = [roomObj, ...allRooms];

        // console.log(tempArray)

        // const token = JSON.parse(localStorage.getItem("token"));
        // console.log(token);


        //  let res = axios.post("http://localhost:3001/rooms", roomObj, {
        //    headers: {
        //      Authorization: `Basic ${token}`,
        //      "Content-Type": "application/json",
        //    },
        //  }).then(response => {
        //      console.log('success', response.data)
        //      setAllRooms(tempArray);
        //  }, (error) => {
        //          console.log('Error', error);
        //  })

        // return res;







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
