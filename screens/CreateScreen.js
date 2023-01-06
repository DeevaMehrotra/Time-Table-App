import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView,
  TextInput
} from 'react-native';
import firebase from "firebase"


export default class CreateScreen extends Component {
 constructor(props){
   super(props)
   this.state = {
     date:"",
     time1:"",
     task1:"",
     task2:"",
     task3:"",
     time2:"",
     time3:""
   };
 }


add_table() {
     console.log("funciton called")
   
   let taskData={
     date:this.state.date,
     time1:this.state.time1,
     task1:this.state.task1,
     time2:this.state.time2,
     task2:this.state.task2,
     time3:this.state.time3,
     task3:this.state.task3,
   }
      console.log(taskData)
      firebase
        .database()
        .ref("/table/")
        .set(taskData)
        .then(function (snapshot) {

        })
      this.props.setUpdateToTrue();
      this.props.navigation.navigate("Home")
    
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/bg2.jpg')}
          style={styles.backgroundImage}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Create Table</Text>
          </View>

          <View style={styles.textinputContainer}>
            <Text style={styles.texthead}>Date:</Text>
            <TextInput
            style={styles.textinput}
            placeholder={"DD-MM-YY"}
            placeholderTextColor= {"#0B5345"}
            
            onChangeText={text => this.setState({ date: text })}
            />
          </View>

          <Text style={styles.taskhead}>Task 1:</Text>
          <View style={styles.textinputContainer}>
            <TextInput style={styles.textinput}
            placeholder={"Enter the time"}
            placeholderTextColor= {"#0B5345"}
            onChangeText={text=>this.setState( {time1: text})}/>
            <TextInput style={styles.textinput}
            placeholder={"Enter the Task"}
            placeholderTextColor= {"#0B5345"}
             onChangeText={text=>this.setState( {task1: text})}/>
          </View>
          <Text style={styles.taskhead}>Task 2:</Text>
          <View style={styles.textinputContainer}>
            <TextInput style={styles.textinput}
            placeholder={"Enter the time"}
            placeholderTextColor= {"#0B5345"}
              onChangeText={text=>this.setState( {time2: text})}/>
            <TextInput style={styles.textinput}
            placeholder={"Enter the Task"}
            placeholderTextColor= {"#0B5345"}
             onChangeText={text=>this.setState( {task2: text})}/>
          </View>
          <Text style={styles.taskhead}>Task 3:</Text>
          <View style={styles.textinputContainer}>
            <TextInput style={styles.textinput}
            placeholder={"Enter the time"}
            placeholderTextColor= {"#0B5345"}
              onChangeText={text=>this.setState( {time3: text})}/>
            <TextInput style={styles.textinput}
            placeholder={"Enter the Task"}
            placeholderTextColor= {"#0B5345"}
             onChangeText={text=>this.setState( {task3: text})}/>
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}
          onPress={()=>this.add_table()}>
          <Text style={styles.buttonText}>  Submit </Text> </TouchableOpacity>
           <TouchableOpacity style={styles.button}
            onPress={() => this.props.navigation.navigate('Home')}>
           <Text style={styles.buttonText}>  Home </Text> </TouchableOpacity>
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
