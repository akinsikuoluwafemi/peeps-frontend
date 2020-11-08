import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import DropzoneComponent from "react-dropzone-component";


export default class ImageDrop extends Component {
    



    render() {
        
            const componentConfig = {
              iconFiletypes: [".jpg", ".png", ".gif"],
              showFiletypeIcon: true,
              maxFiles: 1,
              postUrl: "no-url",
            };


        return (
            <div>
                <DropzoneComponent
                
                />
                {/* <Dropzone>Drop file here</Dropzone> */}
            </div>
        )
    }
}
