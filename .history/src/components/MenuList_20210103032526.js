import React from 'react';
import MenuItem from './MenuItem';

export default function MenuList({requests}) {
    const renderRequest = () => {
        return requests.map(request => <MenuItem request={ request}/> )
    }

    return (
        <div>
            {renderRe}
        </div>
    )
}
