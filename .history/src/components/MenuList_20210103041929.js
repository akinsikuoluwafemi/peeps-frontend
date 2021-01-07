import React from 'react';
import MenuItems from './MenuItem';

export default function MenuList({requests}) {
    console.log(requests)
    const renderRequest = () => {
        return requests.map(request => <MenuItems request={request}/> )
    }

    return (
        <div>
            {renderRequest()}
        </div>
    )
}
