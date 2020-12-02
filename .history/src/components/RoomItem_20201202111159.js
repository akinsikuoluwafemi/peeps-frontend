import React from 'react'

export default function RoomItem({room}) {
    console.log(room)
    return (
        <div>
            {room.name}
        </div>
    )
}
