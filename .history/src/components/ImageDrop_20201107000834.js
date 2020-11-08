import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import DropzoneComponent from "react-dropzone-component";

export default class ImageDrop extends Component {
    



    render() {
        
            const componentConfig = {
              iconFiletypes: [".jpg", ".png", ".gif", ".pdf"],
              showFiletypeIcon: true,
              maxFiles: 1,
              postUrl: "no-url",
            };

        
            const djsConfig = {
            acceptedFiles: "image/jpeg,image/png,image/gif,application/pdf",
            autoProcessQueue: false,
            uploadMultiple: false,
            addRemoveLinks: true,
            };

        const handleUpload = (file) => {
            console.log(file)
            
        }

         const handleOnDrop = (files, rejectedFiles) => {
            console.log(files)
        }

        return (
          <div>
                <DropzoneComponent
                    config={componentConfig}
                    djsConfig={djsConfig}
                    onDrop={this.handleonDrop}
                />
          </div>
        );
    }
}
