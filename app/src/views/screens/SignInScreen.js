import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, Text, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';


const SignInScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>


      <View style={STYLES.container}>
          <View style={STYLES.header}>
          <Image style={STYLES.avatar} source={{uri: 'https://as1.ftcdn.net/v2/jpg/02/91/70/26/1000_F_291702682_6o6zLNgzZRK9J67PNy6R2Vuh2BVvqSQm.jpg'}}/>
          <View style={STYLES.body}>
            <View style={STYLES.bodyContent}>
              <Text style={STYLES.name}></Text>
              <Text style={STYLES.info}></Text>
              <Text style={STYLES.description}></Text>
              
              
            </View>
            </View>  
        </View>
      </View>




        {/*<View style={{flexDirection: 'row', marginTop: 40}}>
          <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.dark}}>
            FOX
          </Text>
        </View>*/}

        <View style={{marginTop: 100}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
            Welcome Back,
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.light}}>
            Sign in to continue
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <View style={STYLES.inputContainer}>
            <Icon
              name="mail-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput placeholder="Email" style={STYLES.input} />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="lock-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Password"
              style={STYLES.input}
              secureTextEntry
            />
          </View>
        <TouchableOpacity onPress={() => navigation.navigate('Option')}>
          <View style={STYLES.btnPrimary}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
              Sign In
            </Text>
          </View>
        </TouchableOpacity>
          <View
            style={{
              marginVertical: 5,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/*<View style={STYLES.line}></View>
            <Text style={{marginHorizontal: 5, fontWeight: 'bold'}}>OR</Text>
          <View style={STYLES.line}></View>*/}
          </View>
         {/*} <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={STYLES.btnSecondary}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Sign in with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require('../../assests/facebook.png')}
              />
            </View>
            <View style={{width: 10}}></View>
            <View style={STYLES.btnSecondary}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Sign in with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require('../../assests/google.png')}
              />
            </View>
          </View>*/}
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'baseline',
            justifyContent: 'flex-end',
            marginTop: 10,
            marginBottom: 20,
          }}>
          <Text style={{color: COLORS.light, fontWeight: 'bold'}}>
            Don`t have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{color: COLORS.pink, fontWeight: 'bold'}}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;