import React, { Component } from "react";
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

class FullscreenCamera extends Component {
    render() {
        return (
            <Camera 
            onTakePhoto = { (dataUri) =>  this.onTakePhoto(dataUri) }
            isFullscreen = { true }
            />
        );
    }
}

export default FullscreenCamera;