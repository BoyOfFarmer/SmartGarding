import RNFS from 'react-native-fs';
const rootPath = RNFS.DocumentDirectoryPath;

  //read data from data.json, return object
  let fetchData = async () => {
    try {
      let path = await rootPath + '/data.json';
      let dataString = await RNFS.readFile(path,'utf8');
      console.warn(dataString);
      if(dataString ==='') {
        return [];
      }
      console.log('data fetched!');
      return JSON.parse(dataString);
    } catch (e) {
      return [];
    }
  };
  // save data from object to json file
  let saveData = (data) =>{
    let path = rootPath + '/data.json';
    RNFS.writeFile(path, JSON.stringify(data), 'utf8').then(() => {
      console.log('data saved!');
      return true;
    }).catch((err) => {
      console.log(err.message);
      return false;
    });
  };

  let addClass = async (name) => {
    let data = await fetchData();
    let group = {
      name: name,
      tests: []
    };
    // check duplicate
    console.log(data);
    let duplicateGroup = data.filter((i) => i.name === name);
    if(duplicateGroup.length === 0){
      data.push(group);
      saveData(data);
      return data;
    } else {
      console.log("duplicate");
      return data;
    }
  };

  let getClass = (name) => {
    let data = fetchData();
    let filteredData = data.filter((i) => i.name === name);
    return filteredData[0];
  };
  let removeClass = (title) => {
    let data = fetchData();
    let filteredData = data.filter((i) => i.name !== name);
    saveData(filteredData);
    return data.length !== filteredData.length;
  };

  export {
    fetchData,
    saveData,
    addClass,
    getClass,
    removeClass
  }
