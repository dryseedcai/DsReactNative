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
 * 常量的导入导出
 * @type {string}
 */
export var name = "dryseed";
var age = "28";
var sex = "男";
export {age, sex};

/**
 * 组件的导入导出 es6实现方式
 */
export default class ExportImportComponent extends Component {
    render() {
        return <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello.{this.props.name}</Text>
    }
}

/**
 * 方法的导入导出
 */
export function sum(a, b) {
    return a + b;
}








