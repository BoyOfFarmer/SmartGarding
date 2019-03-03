import React, {Component} from 'react';
import {StyleSheet, View,StatusBar,PermissionsAndroid, Platform, ScrollView, RefreshControl } from 'react-native';
import { Col, Row, Grid, Footer, FooterTab, Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from 'native-base';
import {fetchData} from '../Utils/DataUtils';

export default class ClassList extends Component {
  static navigationOptions = {
    header : null
  };
  state = {
    groups: []
  }
  componentDidMount = async () => {
    let data = await fetchData()
    this.setState({
      groups: data
    });
  }
  render() {
    const {navigate} = this.props.navigation;
    return(
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Danh sách lớp</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
        <ScrollView>
          {
            this.state.groups.map((group, i) => {
              return (
                <Card>
                  <CardItem>
                    <Text>{group.name}</Text>
                  </CardItem>
                  <Row style={{height: 20}}></Row>
                </Card>

              );
            })
          }
        </ScrollView>
        </Content>

        <Footer>
          <FooterTab>
            <Button transparent light onPress={() => this.props.navigation.navigate('ClassCreateScreen')}>
              <Text style={{fontSize: 14}}>Tạo lớp</Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    );
  }
}
