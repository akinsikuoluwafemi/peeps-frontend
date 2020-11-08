import React, { Component } from 'react'
import Dropzone from 'react-dropzone';


export default class ImageDrop extends Component {
    render() {
        return (
            <div>
                <Dropzone>Drop file here</Dropzone>
            </div>
        )
    }
}
