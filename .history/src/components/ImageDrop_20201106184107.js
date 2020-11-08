import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import DropzoneComponent from "react-dropzone-component";


export default class ImageDrop extends Component {
    
    const componentConfig = {
  iconFiletypes: ['.jpg', '.png', '.gif'],
  showFiletypeIcon: true,
  maxFiles: 1,
  postUrl: 'no-url'
}


    render() {
        return (
            <div>
                <DropzoneComponent/>
                {/* <Dropzone>Drop file here</Dropzone> */}
            </div>
        )
    }
}
