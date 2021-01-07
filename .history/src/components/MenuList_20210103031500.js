import React from 'react';
import MenuItem from './MenuItem';

export default function MenuList({request}) {
    return (
        <div>
            <MenuItem request={request}/>
        </div>
    )
}
