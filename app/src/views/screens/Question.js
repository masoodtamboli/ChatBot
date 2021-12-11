import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { RadioButton, Card } from 'react-native-paper';
import styless from './StyleSheet';

const RadioButtonGroup = () => {
  const [checked, setChecked] = useState('');
  const data = require('./eng.json');
  return (
    <View style={styless.container1}>
      <RadioButton.Group
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}
        onValueChange={newValue => setChecked(newValue)}
        value={checked}>
        <RadioButton.Item
          style={{ width: '100%' }}
          label={data.questionnaire.options.true}
          value="first"
        />
        <RadioButton.Item
          label={data.questionnaire.options.false}
          value="second"
        />
      </RadioButton.Group>
    </View>
  );
};

const Questionnaire = ({ navigation }) => {
  const data = require('./eng.json');
  return (
    <ScrollView>
      <View style={{ paddingVertical: 5, padding: 12 }}>
        <Card style={{ padding: 5 }}>
          <Card.Title title="Covid-Checker" subtitle="Questionnaire" />
        </Card>
      </View>
      {Array.from(Array(5).keys()).map((questionNumber, index) => (
        <View
          key={questionNumber}
          style={{ paddingVertical: 5, padding: 12 }}>
          <Card style={{ padding: 5 }}>
            <Card.Content>
              <Text style={styless.simpleText1} name={`${index}`}>{`${questionNumber + 1
                }. ${data.questionnaire[1][questionNumber + 1]}`}</Text>
            </Card.Content>
            <Card.Actions>
              <RadioButtonGroup />
            </Card.Actions>
          </Card>
        </View>
      ))}
      <View
        style={{
          borderRadius: 10,
          padding: 12,
          paddingBottom: 35,
        }}>
        <TouchableOpacity style={styless.loginButton} onPress={() => navigation.navigate('')}>
          <Text style={styless.loginButtonText}>Check</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};


export default Questionnaire;