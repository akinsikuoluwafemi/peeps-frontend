import React from 'react';

export default function RoomItem({room}) {


    console.log(room);
    return (
      <div>
        {room.name}
        <div class="friend-drawer friend-drawer--onhover">
          <div class="text">
            <h6>Femi Akinsiku</h6>
            <p class="text-muted">Jimoh-Phil</p>
          </div>
        </div>
      </div>
    );

}
