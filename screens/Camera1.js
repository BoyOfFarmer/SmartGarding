'use strict';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View ,PermissionsAndroid, ActivityIndicator,Alert} from 'react-native';
import { RNCamera } from 'react-native-camera';


export default class Camera extends React.Component {
  state = {isPermitted:false}
  constructor(props) {
    super(props);
    var that=this;
    async function requestCameraPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,{
            'title': 'CameraExample App Camera Permission',
            'message': 'CameraExample App needs access to your camera '
          }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          requestExternalWritePermission();
        } else {
          Alert.alert("CAMERA permission denied");
        }
      } catch (err) {
        Alert.alert("Camera permission err",err);
        console.warn(err)
      }
    }
    async function requestExternalWritePermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,{
            'title': 'CameraExample App External Storage Write Permission',
            'message': 'CameraExample App needs access to Storage data in your SD Card '
          }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          requestExternalReadPermission();
        } else {
          Alert.alert("WRITE_EXTERNAL_STORAGE permission denied");
        }
      } catch (err) {
        Alert.alert("Write permission err",err);
        console.warn(err)
      }
    }
    async function requestExternalReadPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,{
            'title': 'CameraExample App Read Storage Write Permission',
            'message': 'CameraExample App needs access to your SD Card '
          }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          requestRecordAuioPermission();
        } else {
          Alert.alert("READ_EXTERNAL_STORAGE permission denied");
        }
      } catch (err) {
        Alert.alert("Read permission err",err);
        console.warn(err)
      }
    }
    async function requestRecordAuioPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,{
            'title': 'CameraExample App Read Storage Write Permission',
            'message': 'CameraExample App needs access to your SD Card '
          }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          that.setState({isPermitted:true})
        } else {
          Alert.alert("READ_EXTERNAL_STORAGE permission denied");
        }
      } catch (err) {
        Alert.alert("Read permission err",err);
        console.warn(err)
      }
    }
    requestCameraPermission();
  }



  render() {
    if(this.state.isPermitted){
      return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
    }else{
      return (
        <ActivityIndicator />
      )
    }
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
