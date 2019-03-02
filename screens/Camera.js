'use strict';
import React, { Component } from 'react';
import { AppRegistry, Dimensions, StyleSheet, Text, TouchableHighlight, View,PermissionsAndroid,Platform,Alert } from 'react-native';
import Camera from 'react-native-camera';

export default class Cam extends Component {
  _requestPermissions = async () => {
    if (Platform.OS === 'android') {
      const result = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
      return result === PermissionsAndroid.RESULTS.GRANTED || result === true;
    }
    return true;
  }
  //
  // _takePicture = async () => {
  //   if (this.camera) {
  //     const options = { quality: 0.5, base64: true };
  //     const data = await this.camera.takePictureAsync(options);
  //     Alert.alert(data.uri);
  //     // console.log(data.uri);
  //   }
  // }

    _takePicture = async () => {
      console.log("fầdfadfadfadsfá");
      if (this.camera) {
        const options = { jpegQuality: 100 };
        const data = await this.camera.capture(options,(obj) => {
          Alert.alert("success");
          Alert.alert(obj.path);
        }, (obj) => {
          Alert.alert("err");
        });
        Alert.alert(data.uri);
        // console.log(data.uri);
      }
    }

  _onBarCodeRead = (e) => {
    console.log(`Barcode Found! Type: ${e.type}\nData: ${e.data}`)
  }

  // componentDidMount = () => {
  //   ({ _, status }) => {
  //     if (status !== 'PERMISSION_GRANTED') {
  //       this._requestPermissions();
  //     }
  //   }
  // }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(ref) => {
            this.camera = ref;
          }}
          onBarCodeRead={(e) => this._onBarCodeRead(e)}
          style={styles.preview}>
        <Text style={styles.capture} onPress={() => this._takePicture()}>[CAPTURE]</Text>
      </Camera>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});
