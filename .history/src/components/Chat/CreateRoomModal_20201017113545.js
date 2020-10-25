import React from 'react';
import TextField from "@material-ui/core/TextField";



export default function CreateRoomModal() {
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
                Modal title
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
                // value={firstName}
                // onChange={handleFirstName}
                fullWidth
              />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}