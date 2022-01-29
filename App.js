import * as React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  Dimensions,
} from 'react-native';
const numColumns=3;
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: new Array(11).fill('http://placeimg.com/640/360/any'),
      
    };
  }

  renderItem({ item }) {
    return (
      <ImageBackground
        source={{ uri: item }}
        style={{
          aspectRatio: 1,
          flex: 1 / numColumns,
          margin: 2,
          opacity: 0.8,
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            backgroundColor: 'black',
            opacity:0.8,
            width: '100%',
            alignItems: 'center',
          }}>
          <Text style={{color:"white", fontWeight: 'bold' }}>Hi </Text>
        </View>
      </ImageBackground>
    );
  }

  render() {
    return (
      <FlatList
        data={this.state.images}
        renderItem={this.renderItem}
        numColumns={numColumns}
      />
    );
  }
}
