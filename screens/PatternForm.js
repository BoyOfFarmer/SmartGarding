import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, ImageBackground } from 'react-native';
import { Col, Row, Grid, Footer, FooterTab, Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem } from 'native-base';
import {
    DocumentPicker,
    DocumentPickerUtil,
} from 'react-native-document-picker';
import Parse from './Parse'
import fs from 'react-native-fs'
import Papa from 'papaparse'
export default class GuideScreen extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            fileUri: '',
            fileType: '',
            fileName: '',
            fileSize: '',
            data: ''
        };
    }
    handleChange() {
        //Opening Document Picker
        DocumentPicker.show(
            {
                filetype: [DocumentPickerUtil.allFiles()],
                //All type of Files DocumentPickerUtil.allFiles()
                //Only PDF DocumentPickerUtil.pdf()
                //Audio DocumentPickerUtil.audio()
                //Plain Text DocumentPickerUtil.plainText()
            },
            (error, res) => {
                this.setState({ fileUri: res.uri });
                this.setState({ fileType: res.type });
                this.setState({ fileName: res.fileName });
                this.setState({ fileSize: res.fileSize });

                // console.log('res : ' + JSON.stringify(res));
                //console.log('URI : ' + res.uri);
                // console.log('Type : ' + res.type);
                // console.log('File Name : ' + res.fileName);
                // console.log('File Size : ' + res.fileSize);
                fs.readFile(res.uri).then(data => {
                    this.setState({
                        ...this.state,
                        data
                    })
                    console.log(data)
                })


            }
        );
    }

    render() {
        results = Papa.parse(this.state.data, { header: true }).data
        results.pop()
        // console.log(results)
        if (this.state.fileUri)
            return (
                <Container>
                    <Header>
                        <Left style={{ flex: 1 }}>
                        </Left>
                        <Body style={{ flex: 1 }}>
                            <Title >Pattern result</Title>
                        </Body>
                        <Right style={{ flex: 1 }}>
                        </Right>
                    </Header>
                    <Content padder>
                        <Row style={{ height: 10 }}></Row>
                        <Button block info onPress={this.handleChange.bind(this)}>
                            <Icon type="SimpleLineIcons" name='doc' />
                            <Text>Add from my device</Text>
                        </Button>
                        <Text style={{ fontSize: 20 }}>Đáp án</Text>
                        <Parse data={results} uri={this.state.fileUri} />
                        {/* <Text style={styles.text}>
                        {this.state.fileUri ? 'URI\n' + this.state.fileUri : ''}
                    </Text>
                    <Text style={styles.text}>
                        {this.state.fileType ? 'Type\n' + this.state.fileType : ''}
                    </Text>
                    <Text style={styles.text}>
                        {this.state.fileName ? 'File Name\n' + this.state.fileName : ''}
                    </Text>
                    <Text style={styles.text}>
                        {this.state.fileSize ? 'File Size\n' + this.state.fileSize : ''}
                    </Text> */}

                    </Content>
                </Container>
            );
        return (
            <Container>
                <Header>
                    <Left style={{ flex: 1 }}>
                    </Left>
                    <Body style={{ flex: 1 }}>
                        <Title >Pattern result</Title>
                    </Body>
                    <Right style={{ flex: 1 }}>
                    </Right>
                </Header>
                <Content padder>
                    <Row style={{ height: 10 }}></Row>
                    <Button block info onPress={this.handleChange.bind(this)}>
                        <Icon type="SimpleLineIcons" name='doc' />
                        <Text>Add from my device</Text>
                    </Button>
                    {/* <Text style={styles.text}>
                        {this.state.fileUri ? 'URI\n' + this.state.fileUri : ''}
                    </Text>
                    <Text style={styles.text}>
                        {this.state.fileType ? 'Type\n' + this.state.fileType : ''}
                    </Text>
                    <Text style={styles.text}>
                        {this.state.fileName ? 'File Name\n' + this.state.fileName : ''}
                    </Text>
                    <Text style={styles.text}>
                        {this.state.fileSize ? 'File Size\n' + this.state.fileSize : ''}
                    </Text> */}

                </Content>
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
