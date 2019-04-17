import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, ImageBackground } from 'react-native';
import { Col, Row, Grid, Footer, FooterTab, Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem } from 'native-base';
export default class StudentScreen extends Component {
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
                        <Title > Student</Title>
                    </Body>
                    <Right style={{ flex: 1 }}>
                        <Button onPress={() => this.props.navigation.navigate('NewStudent')}>
                            <Text>New</Text>
                        </Button>
                    </Right>
                </Header>
                <View style={{ flex: 1 }}>
                    
                </View>
            </Container>
        );
    }
}