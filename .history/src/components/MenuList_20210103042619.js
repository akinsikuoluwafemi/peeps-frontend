import React from 'react';
import MenuItems from './MenuItem';

export default function MenuList({requests}) {
    console.log(requests.length)
    const renderRequest = () => {
        return requests.map(request => <MenuItems request={request}/> )
    }

    return (
        <div>
            {requests.length > 0 ? 
            
            renderRequest()

            
             : <p class>Nothing to republish</p>}
        </div>
    )
}
