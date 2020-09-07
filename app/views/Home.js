import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export class Home extends React.Component {
  render() {
    return (
      <View style={styles.headStyle}>
        <Text style={styles.headText}>Magic Store</Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
    headText:{
        textAlign:'center'

    }
})