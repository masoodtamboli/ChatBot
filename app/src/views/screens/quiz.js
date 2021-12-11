import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Animbutton from './animbutton'
import Icon from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window')
let arrnew = []
const jsonData = {"quiz" : {
  "quiz1" : {
    "question1" : {
      "correctoption" : "option1",
      "options" : {
        "option1" : "YES",
        "option2" : "NO",
      },
      "question" : "1. Have you lost the sense of smell and taste?"
    },
    "question2" : {
      "correctoption" : "option1",
      "options" : {
          "option1" : "YES",
          "option2" : "NO",
        },
      "question" : "2. Do you have have a severe or significant cough?"
    },
    "question3" : {
      "correctoption" : "option1",
      "options" : {
          "option1" : "YES",
          "option2" : "NO",
        },
      "question" : "3. Are you feeling fatigued?"
    },
    "question4" : {
      "correctoption" : "option1",
      "options" : {
          "option1" : "YES",
          "option2" : "NO",
        },
      "question" : "4. Have you skipped a meal in last week?"
    },
    "question5" : {
      "correctoption" : "option1",
      "options" : {
          "option1" : "YES",
          "option2" : "NO",
        },
      "question" : "5. Are you feeling difficulty in breathing?"
    }
  }
}
}
export default class Quiz extends Component {
  constructor(props){
    super(props);
    this.qno = 0
    this.score = 0
 
    const jdata = jsonData.quiz.quiz1
    arrnew = Object.keys(jdata).map( function(k) { return jdata[k] });
    this.state = {
      question : arrnew[this.qno].question,
      options : arrnew[this.qno].options,
      correctoption : arrnew[this.qno].correctoption,
      countCheck : 0
    }
 
  }
  /*prev(){
    if(this.qno > 0){
      this.qno--
      this.setState({ question: arrnew[this.qno].question, options: arrnew[this.qno].options, correctoption : arrnew[this.qno].correctoption})
    }
  }*/
  next(){
    if(this.qno < arrnew.length-1){
      this.qno++
 
      this.setState({ countCheck: 0, question: arrnew[this.qno].question, options: arrnew[this.qno].options, correctoption : arrnew[this.qno].correctoption})
    }else{
      
      this.props.quizFinish(this.score*100/5)
     }
  }
  _answer(status,ans){
 
    if(status == true){
        const count = this.state.countCheck + 1
        this.setState({ countCheck: count })
        if(ans == this.state.correctoption ){
          this.score += 1
        }
      }else{
        const count = this.state.countCheck - 1
        this.setState({ countCheck: count })
        if(this.state.countCheck < 1 || ans == this.state.correctoption){
        this.score -= 1
       }
      }
 
  }
  render() {
    let _this = this
    const currentOptions = this.state.options
    const options = Object.keys(currentOptions).map( function(k) {
      return (  <View key={k} style={{margin:10}}>
 
        <Animbutton countCheck={_this.state.countCheck} onColor={"#1799d1"} effect={"tada"} _onPress={(status) => _this._answer(status,k)} text={currentOptions[k]} />
 
      </View>)
    });
 
    return (
      <ScrollView style={{backgroundColor: '#e3e5e6',paddingTop: 10}}>
      <View style={styles.container}>
 
      <View style={{ flex: 1,flexDirection: 'column', justifyContent: "space-between", alignItems: 'center',}}>
 
      <View style={styles.oval} >
        <Text style={styles.welcome}>
          {this.state.question}
        </Text>
        <View style={{flexDirection: 'row'}}>
        { options }
        </View>
     </View>
        <View style={{flexDirection:"row"}}>
      {/*   <Button
          onPress={() => this.prev()}
          title="Prev"
          color="#841584"
        />
        <View style={{margin:15}} />*/}
 
        <TouchableOpacity onPress={() => this.next()} >
          <View style={{paddingTop: 5,paddingBottom: 5, paddingRight: 20, paddingLeft: 20, borderRadius:10, backgroundColor:"green"}}>
            <Icon name="md-arrow-round-forward" size={30} color="white" />
          </View>
      </TouchableOpacity >
      
 
        </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}
 
const styles = StyleSheet.create({
 
  oval: {
  width: width * 90/100,
  borderRadius: 10,
  backgroundColor: 'white'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    margin: 15,
    color: "black"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});