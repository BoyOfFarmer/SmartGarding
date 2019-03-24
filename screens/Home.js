import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, PermissionsAndroid, Platform, Share } from 'react-native';
import { Col, Row, Grid, Footer, FooterTab, Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem } from 'native-base';



export default class Home extends Component {
  static navigationOptions = {
    header: null,
  };
  // componentDidMount = () => {
  //   //Checking for the permission just after component loaded
  //    async function requestCameraPermission() {
  //      try {
  //        const granted = await PermissionsAndroid.request(
  //          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,{
  //            'title': 'AndoridPermissionExample App Camera Permission',
  //            'message': 'AndoridPermissionExample App needs access to your camera '
  //          }
  //        )
  //        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //          //To Check, If Permission is granted
  //          alert("You can use the CAMERA");
  //        } else {
  //          alert("CAMERA permission denied");
  //        }
  //      } catch (err) {
  //        alert("err",err);
  //        console.warn(err)
  //      }
  //    }
  //    if (Platform.OS === 'android') {
  //        //Calling the permission function
  //        requestCameraPermission();
  //    }else{
  //        alert('IOS device found');
  //    }
  // }
  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'SmartGading is a good product',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>

        <Header>
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={() => this.props.navigation.navigate('Setting')}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body style={{ flex: 1 }}>
            <Title >SmartGrading</Title>
          </Body>
          <Right style={{ flex: 1 }}>
            <Button onPress={() => this.props.navigation.navigate('Guide')}>
              <Icon name='guide' />

            </Button>
          </Right>
        </Header>

        <Content padder>
          <Row style={{ height: 100 }}></Row>
          <Button block info onPress={() => this.props.navigation.navigate('ClassListScreen')}>
            <Icon type="AntDesign" name='form' />
            <Text>Chấm bài</Text>
          </Button>
          <Row style={{ height: 20 }}></Row>
          <Button block info onPress={() => this.props.navigation.navigate('ImageBrowserScreen')}>
            <Icon type="AntDesign" name='form' />
            <Text>Gallery</Text>
          </Button>
          <Row style={{ height: 20 }}></Row>
          <Button block info onPress={() => this.props.navigation.navigate('Pattern')}>
            <Icon type="SimpleLineIcons" name='doc' />
            <Text>Mẫu phiếu</Text>
          </Button>
          <Row style={{ height: 20 }}></Row>
          <Button block info onPress={this.onShare} title="Share">
            <Icon type="AntDesign" name='sharealt' />
            <Text>Chia sẻ</Text>
          </Button>
          <Row style={{ height: 20 }}></Row>
          <Button block info onPress={() => this.props.navigation.navigate('Info')}>
            <Icon type="FontAwesome" name='user-o' />
            <Text>Về chúng tôi</Text>
          </Button>
        </Content>

        <Footer>
          <FooterTab>
            <Button full>
              <Text>Developed by Blockchain Lab</Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    );
  }
}



