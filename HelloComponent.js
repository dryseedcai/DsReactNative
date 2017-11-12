/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

/**
 * 方式一：ES6
 * 推荐
 */
export default class HelloComponent extends Component{
    render(){
        return <Text style={{fontSize:20, backgroundColor:'red'}}>Hello.{this.props.name}</Text>
    }
}

/**
 * 方式二：ES5
 * 在新版本的react中，已经废除了createClass，所以此方法运行不了
 */
// var HelloComponent = React.createClass({
//     render() {
//         return <Text style={{fontSize: 20, backgroundColor: "red"}}> Hello </Text>
//     }
// })
// module.exports = HelloComponent;

/**
 * 方式三：函数式
 * 无状态，不能使用this
 */
// function HelloComponent(props) {
//     return <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello.{props.name}</Text>
// }
// module.exports = HelloComponent;







