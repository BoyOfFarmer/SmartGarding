import React, { Component } from 'react';
import { Text } from 'react-native';
import { StyleSheet, View, StatusBar, ImageBackground, FlatList } from 'react-native';
import Papa from 'papaparse'
import fs from 'react-native-fs'
import RNFetchBlob from 'react-native-fetch-blob';
const pathToWrite = `${RNFetchBlob.fs.dirs.DownloadDir}/1611/data.csv`;
const results = [];
export default class Parse extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    data = this.props.data
    csv = Papa.unparse(data)
    RNFetchBlob.fs
      .writeFile(pathToWrite, csv, 'utf8')
      .then(() => {
        console.log(`wrote file ${pathToWrite}`);
        // wrote file /storage/emulated/0/Download/data.csv
      })
      .catch(error => console.error(error));
    result = data.map((item, index) => {
      return {
        title: "Câu " + item["Stt"] + ": " + item["Res"],
        content: ""
      }
    })
    return (
      <View>
        <FlatList
          data={result}
          renderItem={({ item }) => <View>
            <Text style={styles.text}>{item.title}</Text>
          </View>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    color: 'green',
  },
});
