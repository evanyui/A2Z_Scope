import React from 'react';
import { View, Text, Image, Linking, Button } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import SlidingPanel from 'react-native-sliding-up-down-panels';
import Toolbar from './toolbar.component';

import styles from './styles';

const COMPRESSION = 0.1;
const API_ENDPOINT = 'https://w0m2ps5lie.execute-api.us-west-2.amazonaws.com/final/';

export default class CameraPage extends React.Component {

    constructor(props) {
        super(props);

        this.camera = null;
        this.panel = null;
        this.state = {
            hasCameraPermission: null,
            capture: null,
            results: []
        };
    }

    handleShortCapture = async () => {
        const photoData = await this.camera.takePictureAsync({ base64:true, quality:COMPRESSION });
        this.setState({ capture: photoData })
        this.execute(photoData.base64);
    };

    execute = (photo) => {
        fetch(API_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify({
                photo: photo
            }),
        }).then(res => res.json())
        .then(json => {
            console.log(json);
            this.setState({results: json.urls});
            this.panel.onRequestStart();
        });
    }

    onBack = () => {
        this.setState({ capture: null })
        this.panel.onRequestClose();
    }

    /*
        * Ask for permission and set state to allow camera rendering
        */
    async componentDidMount() {
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const hasCameraPermission = (camera.status === 'granted');

        this.setState({ hasCameraPermission });
    };

    render() {
        if (this.state.hasCameraPermission === null) {
            return <View />;
        } else if (this.state.hasCameraPermission === false) {
            return <Text>Access to camera has been denied.</Text>;
        }

        return (
                <React.Fragment>
                    {this.state.capture? 
                        (<View>
                            <Image source={ this.state.capture } style={ styles.preview } />
                        </View>) :
                        (<View>
                            <Camera
                            style={styles.preview}
                            ref={camera => this.camera = camera}/>
                        </View>)
                    }
                    <Toolbar onShortCapture={this.handleShortCapture} onBack={this.onBack}/>
                    <SlidingPanel
                    ref={panel => this.panel = panel}
                    headerLayoutHeight = {15}
                    headerLayout = { () => 
                        <View style={styles.headerLayoutStyle}>
                        </View> 
                    }
                    slidingPanelLayout = { () =>
                        <View style={styles.slidingPanelLayoutStyle}>
                            {this.state.results.map(res => (
                                <Button 
                                style={styles.link} 
                                title={res} 
                                key={res} 
                                onPress={ ()=>{ Linking.openURL(res)}} />
                            ))}
                        </View>
                    }
                    allowAnimation={true}
                    allowDragging={true}
                    />
                </React.Fragment>
            );
        };
    };
    