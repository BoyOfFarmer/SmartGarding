import React, {Component} from 'react';
import {Form, Item, Label, Input, Col, Row, Grid, Footer, FooterTab, Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from 'native-base';
import {addClass} from '../Utils/DataUtils';

export default class ClassCreate extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    name: ''
  };
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
          <Title>Tạo Lớp</Title>
        </Body>
        <Right />
      </Header>

      <Content padder>
          <Form>
            <Row style={{height: 200 }}></Row>
            <Item inlineLabel>
              <Label>Tên Lớp</Label>
              <Input onChangeText={(text) => this.setState({name: text})}/>
            </Item>
            <Row style={{height: 20}}></Row>
            <Row>
              <Col/>
              <Col style={{justifyContent: 'center'}}>
                <Button info block onPress={() => {
                  addClass(this.state.name);
                  this.props.navigation.navigate('ClassListScreen');
                }}>
                    <Text>Tạo</Text>
                </Button>
              </Col>
              <Col/>
              <Col>
                <Button info block onPress={() => this.props.navigation.navigate('ClassListScreen')}>
                    <Text>Hủy</Text>
                </Button>
              </Col>
              <Col/>
            </Row>
          </Form>
      </Content>
    </Container>
    );
  }
}
