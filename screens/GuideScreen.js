import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, ImageBackground } from 'react-native';
import { Col, Row, Grid, Footer, FooterTab, Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem } from 'native-base';
export default class GuideScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Container>
        <Header>
          <Left style={{ flex: 1 }}>
          </Left>
          <Body style={{ flex: 1 }}>
            <Title >Hướng dẫn</Title>
          </Body>
          <Right style={{ flex: 1 }}>
          </Right>
        </Header>
        <View style={{ flex: 1 }}>
          <ImageBackground resizeMode={'stretch'}
            style={styles.container} source={require('./guide.jpg')}>
          </ImageBackground>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});