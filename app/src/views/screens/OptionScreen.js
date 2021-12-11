import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  ScrollView
} from 'react-native';

export default class Craigslist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible:false,
      userSelected:[],
      data: [
        {id:1,  name: "COVID-CHECKER",    image:"https://mumbaimirror.indiatimes.com/photo/82518759.cms",  screen: "checker"        },
        {id:2,  name: "CHATBOT",          image:"http://www.salesforce.com/content/dam/blogs/us/thumbnails/how-one-intern-helped-automate-answers-with-ai/intern_research_ai_chatbot.png", screen: "Interface"            },
        {id:3,  name: "SETTINGS",         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkDbYsRFwYbcu2pe1QrQtf74PvXWwXL_Kkg&usqp=CAU", screen: "Profile"  } ,
      ]
    };
  }

  clickEventListener = (item) => {
    Alert.alert('Message', 'Item clicked. '+item.name);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          style={styles.contentList}
          //columnWrapperStyle={styles.containerlist}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.card} onPress={() => {this.props.navigation.navigate(item.screen)}}>
              <Image style={styles.image} source={{uri: item.image}}/>
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.name}</Text>
                <TouchableOpacity style={styles.followButton} onPress={()=> this.props.navigation.navigate(item.screen)}>
                  <Text style={styles.followButtonText}>Enter</Text>  
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            

          )}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:10,
    backgroundColor:"#ebf0f7"
  },
  contentList:{
    flex:1,
  },
  cardContent: {
    marginLeft:10,
    marginTop:10
  },
  image:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:2,
    borderColor:"#ebf0f7"
  },

  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop:20,
    backgroundColor:"white",
    padding: 10,
    flexDirection:'row',
    borderRadius:30,
  },

  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#3399ff",
    fontWeight:'bold'
  },
  followButton: {
    marginTop:5,
    height:35,
    width:100,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "white",
    borderWidth:1,
    borderColor:"#2e2e2e",
  },
  followButtonText:{
    color: "#2e2e2e",
    fontSize:12,
  },
}); 

                                    