// @flow
'use strict';

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ART,
  TouchableWithoutFeedback
} from 'react-native';

const {
  Surface,
  Group,
  Rectangle,
  Shape,
} = ART;

import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import * as d3Array from 'd3-array';
import Theme from './resources/theme/theme.js';

const d3 = {
  scale,
  shape,
};

class Doughnut extends React.Component {

  constructor(props: Props) {
    super(props);
    this.createDoughnutChart = this.createDoughnutChart.bind(this);
    this.getValue = this.getValue.bind(this);
    this.getlabel = this.getlabel.bind(this);
    this.getColor = this.getColor.bind(this);

  }

  createDoughnutChart(index) {

    var arcs = d3.shape.pie()
        .value(this.getValue)
        (this.props.data);

    var arc = d3.shape.arc()
      .outerRadius(this.props.doughnutWidth/2)
      .padAngle(.05)
      .innerRadius(60);

    var arcData = arcs[index];
    var path = arc(arcData);

     return {
       path,
       color: this.getColor(index),
     };
  }

  getValue(item) {
    return item[this.props.meassure];
  }

  getlabel(item) {
    return item[this.props.dimention];
  }

  getColor(index) {
    return Theme.colors[index];
  }

  render() {
    const margin = styles.container.margin;
    const x = this.props.doughnutWidth / 2 + margin;
    const y = this.props.doughnutHeight / 2 + margin;
    var svgsData = []

    this.props.data.map( (item, index) => {
        var svg = this.createDoughnutChart(index)
        svgsData.push(svg)
      }
    )

    return (
      <View width={this.props.width} height={this.props.height}>
        <Surface width={this.props.width} height={this.props.height}>
           <Group x={x} y={y}>
           {
                svgsData.map( (item, index) =>
                (<Shape
                   key={'doughnut_shape_' + index}
                   fill={item.color}
                   stroke={item.color}
                   d={item.path}
                  />))
           }
          </Group>
        </Surface>
        <View width={this.props.width} height={this.props.height}>
          {
            this.props.data.map( (item, index) =>
            {
              return (
                <TouchableWithoutFeedback>
                  <View>
                    {/* <Text style={styles.instructions}>Hello</Text> */}
                    <Text style={[styles.instructions, {color: this.getColor(index)}]}>{this.getlabel(item)}: {this.getValue(item)}</Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })
          }
        </View>
      </View>
    );
  }
}

Doughnut.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  doughnutWidth: React.PropTypes.number.isRequired,
  doughnutHeight: React.PropTypes.number.isRequired,
  colors: React.PropTypes.array.isRequired,
  data: React.PropTypes.any.isRequired,
  dimention: React.PropTypes.string.isRequired,
  meassure: React.PropTypes.string.isRequired
};


const styles = {
  container: {
    margin: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    color: 'black',
    fontSize: 16,
  },
};

export default Doughnut;
