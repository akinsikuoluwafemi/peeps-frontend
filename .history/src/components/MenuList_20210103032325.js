import React from 'react';
import MenuItem from './MenuItem';

export default function MenuList({request}) {
    const renderRequest = () => {
        let req = request.map()
    }

    return (
        <div>
            <MenuItem request={request} />
        </div>
    )
}
