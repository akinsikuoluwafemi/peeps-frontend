import React from 'react';

export default function RoomItem({room}) {


    console.log(room);
    return (
      <div>
        <div class="friend-drawer friend-drawer--onhover">
          <div class="text">
            <h6>Femi Akinsiku & jimoh</h6>
            <p class="text-muted"> {room.name}</p>
          </div>
        </div>
      </div>
    );

}
