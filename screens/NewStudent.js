import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, ImageBackground, TextInput } from 'react-native';
import { Col, Row, Grid, Footer, FooterTab, Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem } from 'native-base';
export default class NewStudent extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = { f_name: '',l_name: '', mssv: '' };
      }
    render() {
        return (
            <Container>
                <Header>
                    <Left style={{ flex: 1 }}>
                    </Left>
                    <Body style={{ flex: 1 }}>
                        <Title >New Student</Title>
                    </Body>
                    <Right style={{ flex: 1 }}>
                    </Right>
                </Header>
                <View style={{ flex: 1 }}>
                <Row style={{ height: 50 }}></Row>
                <Text>First Name:</Text>
                <Row style={{ height: 10 }}></Row>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(f_name) => this.setState({...this.state,f_name})}
                    value={this.state.f_name}
                />
                <Row style={{ height: 20 }}></Row>
                <Text>Last Name:</Text>
                <Row style={{ height: 10 }}></Row>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(l_name) => this.setState({...this.state,l_name})}
                    value={this.state.l_name}
                />
                <Row style={{ height: 20 }}></Row>
                <Text>MSSV:</Text>
                <Row style={{ height: 10 }}></Row>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(mssv) => this.setState({...this.state,mssv})}
                    value={this.state.mssv}
                />
                <Row style={{ height: 20 }}></Row>
                <View style={styles.container}>
                    <View style={styles.button} >
                        <Button style={{backgroundColor:'white'}} onPress={() => this.props.navigation.navigate('Student')}>
                            <Text style={{flex:1,color: 'red'}}>Cancle </Text>
                        </Button>
                    </View>
                    <View style={styles.button}>
                        <Button style={{backgroundColor:'white'}} onPress={() => this.props.navigation.navigate('Student')}>
                            <Text style={{flex:1,color: 'green',}}>Create </Text>
                        </Button>
                        
                    </View>
                </View>
   
                </View>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    button: {
      width: '25%',
      height: 40
    }
  });