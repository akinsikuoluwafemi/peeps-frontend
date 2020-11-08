import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import DropzoneComponent from "react-dropzone-component";
// import "react-dropzone-component/styles/filepicker";
// import "dropzone/dist/min/dropzone.min";
export default class ImageDrop extends Component {
    



    render() {
        
            const componentConfig = {
              iconFiletypes: [".jpg", ".png", ".gif"],
              showFiletypeIcon: true,
              maxFiles: 1,
              postUrl: "no-url",
            };

        
const djsConfig = {
  acceptedFiles: "image/jpeg,image/png,image/gif",
  autoProcessQueue: false,
  uploadMultiple: false,
  addRemoveLinks: true,
};

        return (
          <div>
            <DropzoneComponent config={componentConfig} djsConfig={djsConfig} />
          </div>
        );
    }
}
