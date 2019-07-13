import React, { Component } from "react";
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faUpload } from '@fortawesome/free-solid-svg-icons';


import "./FullscreenCamera.css";

class FullscreenCamera extends Component {
    render() {
        return (
            <div>
                <AppBar position="static" className="appBar">
                    <Toolbar>
                        <FontAwesomeIcon className="backIcon" icon={ faAngleLeft } size="3x"/>
                        <Typography className="" variant="h4">
                        home
                        </Typography>
                        <Button className="button" color="default" size="large">
                            <FontAwesomeIcon className="backIcon" icon={ faUpload } size="2x"/> 
                            <Typography className="buttonText" variant="p">
                                Upload a picture
                            </Typography>
                        </Button>
                    </Toolbar>
                </AppBar>
                <Camera 
                onTakePhoto = { (dataUri) =>  this.onTakePhoto(dataUri) }
                isFullscreen = { true }
                />
            </div>
        );
    }
}

export default FullscreenCamera;