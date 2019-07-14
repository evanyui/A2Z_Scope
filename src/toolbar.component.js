import React from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import { View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export default ({ 
    onShortCapture,
    onBack
}) => (
    <Grid style={styles.bottomToolbar}>
        <Row>
            <Col style={styles.alignCenter}>
                <TouchableWithoutFeedback onPress={onBack}>
                    <Ionicons
                        name={"md-arrow-back"}
                        color="white"
                        size={30}
                    />
                </TouchableWithoutFeedback>
            </Col>
            <Col size={2} style={styles.alignCenter}>
                <TouchableWithoutFeedback
                    onPress={onShortCapture}>
                    <View style={styles.captureBtn}/>
                </TouchableWithoutFeedback>
            </Col>
            <Col style={styles.alignCenter}>
                <TouchableWithoutFeedback onPress={() => {}}>
                    <Ionicons
                        name={"md-image"}
                        color="white"
                        size={30}
                    />
                </TouchableWithoutFeedback>
            </Col>
        </Row>
    </Grid>
);
