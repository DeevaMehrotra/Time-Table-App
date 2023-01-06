import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/bg2.jpg')}
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Time Table App</Text>
          </View>

          <View>
            <TouchableOpacity
              style={styles.routeCard}
              onPress={() => this.props.navigation.navigate('Create')}>
              <Text style={styles.routeText}>Create Table</Text>
              <Image
                source={require('../assets/icon.png')}
                style={styles.iconImage}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.routeCard}
              onPress={() => this.props.navigation.navigate('View')}>
              <Text style={styles.routeText}>View Table</Text>
              <Image
                source={require('../assets/icon.png')}
                style={styles.iconImage}></Image>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    marginTop: 35,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#4dffff',
  },
  backgroundImage: {
    flex: 1,
    width: 320,
    height: 700,
    alignSelf: 'center',
  },
  routeCard: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 50,
    height: 150,
    borderRadius: 30,
    backgroundColor: 'teal',
  },
  routeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4dffff',
    marginTop: 25,
    paddingLeft: 30,
  },
  iconImage: {
    position: 'absolute',
    height: 100,
    width: 100,
    resizeMode: 'contain',
    right: 20,
    top: 60,
  },
});
