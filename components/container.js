import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Doughnut from './doughnut.js';
import Theme from './resources/theme/theme.js';
import data from './resources/data/data.js';

export default class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    const width = 200;
    const height = 200;
    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.container} >
          <Text style={styles.chart_title}>CARS Availability</Text>
          <Doughnut
            width={width}
            height={height}
            doughnutWidth={150}
            doughnutHeight={150}
            colors={Theme.colors}
            data={data.Cars}
            dimention={"Status"}
            meassure={"Value"}
           />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  chart_title : {
    paddingTop: 15,
    textAlign: 'center',
    paddingBottom: 5,
    paddingLeft: 5,
    fontSize: 18,
    backgroundColor:'white',
    color: 'grey',
    fontWeight:'bold',
    marginTop: 20,
  }
});
