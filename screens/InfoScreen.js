import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, ImageBackground, FlatList } from 'react-native';
import { Col, Row, Grid, Footer, FooterTab, Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem, List } from 'native-base';
data = [{
    title: 'Nhanh chóng, chính xác',
    content: 'SmartGrading biết khi nào một bài được cham. Điện thoại sẽ rung khi có hình ảnh để cho bạn biết nó đã sẵn sàng để quét hình ảnh khác. Quét, chấm điểm và tổ chức tối đa 20 bài kiểm tra mỗi phút'
},
{
    title: 'Phản hồi tức thì',
    content: 'Nhiều giáo viên bây giờ lên lớp ngay khi học sinh hoàn thành một bài kiểm tra hoặc bài kiểm tra. Học sinh nhận được phản hồi ngay lập tức và giáo viên có thể chuyển hướng học tập khác một cách nhanh chóng.'
},
{
    title: 'Miễn phí',
    content: 'Đây là sản phẩm phi lợi nhuận cấp trường'
},
{
    title: 'Linh hoạt',
    content: 'Với nhiều kích cỡ và mẫu câu trả lời, SmartGrading có thể được sử dụng cho bài kiểm tra hàng ngày, câu hỏi hàng tuần hoặc bài kiểm tra dài hơn.'
},
]

export default class GuideScreen extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <View>
                <Header>
                    <Left style={{ flex: 1 }}>
                    </Left>
                    <Body style={{ flex: 1 }}>
                        <Title >Giới thiệu </Title>
                    </Body>
                    <Right style={{ flex: 1 }}>
                    </Right>
                </Header>
                <View>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <View>
                            <Text style={styles.text}>{item.title}</Text>
                            <Text>{item.content}</Text>
                            <Text></Text>
                            </View>}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    text: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 20,
      color: 'green',
    },
  });