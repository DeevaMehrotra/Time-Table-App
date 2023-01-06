import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  SafeAreaView,
  ImageBackground
} from "react-native";

import firebase from "firebase"

export default class ViewScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskdate: [],
      date:" "
    };
  }

  componentDidMount = async () => {
    this.getTable();
  };

  //Bp
  getTable = () => {
   
    firebase
      .database()
      .ref("/table/")
      .on("value", snapshot => {
        taskdate = snapshot.val().date;

       console.log(taskdate)
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/bg2.jpg')}
          style={styles.backgroundImage}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Current Table</Text>
          </View>
          
          <View style={styles.textinputContainer}>
            <Text style={styles.texthead}>Date:</Text>
            <TextInput
            style={styles.textinput}
            placeholder={"Enter the date"}
            placeholderTextColor= {"#0B5345"}
            />
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>  Submit </Text> </TouchableOpacity>
           <TouchableOpacity style={styles.button}
            onPress={() => this.props.navigation.navigate('Home')}>
           <Text style={styles.buttonText}
           >  Home </Text> </TouchableOpacity>
          </View>

          <View style={styles.timetable}>
          <Text style= {styles.texthead}> Date: </Text>
          <Text style={styles.taskhead} > {this.state.taskdate}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    marginTop: 5,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FDFEFE',
    alignSelf:"center",
     
  },
  textinput: {
    width: "90%",
    height: 50,
    padding: 10,
    borderRadius: 10,
    fontSize: 18,
    backgroundColor: "#D6EAF8",
    marginLeft : 10,
    marginTop:5,
    color: "black",
    alignSelf: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: 300,
    height: 680,
    alignSelf: 'center',
  },
  textinputContainer: {
    marginTop:5
  },
  texthead: {
    alignSelf:"center",
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF59D',
    marginLeft:20
  },
taskhead: {
    alignSelf:"center",
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F5B7B1',
    marginLeft:9
  },
  timetable:{
    marginTop:30,
   
  },
buttonContainer: {
    flexDirection: "row",
    marginTop:15,
    marginLeft:15
  },
  button: {
    width: "43%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C0392B",
    borderRadius: 15,
    marginLeft:10
  },
  buttonText: {
    fontSize: 24,
    color: "#0B5345",
    fontWeight:"bold"
  },
  
});

