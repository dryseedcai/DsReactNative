/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';


/**
 * props
 */
export default class PropsComponent extends Component {
    //属性默认值
    static defaultProps = {
        name: "dryseedcai",
        age: 18
    }

    // 属性类型校验（运行有问题）
    static propTypes = {
        name: PropTypes.string,
        age:PropTypes.number,
        sex:PropTypes.string.isRequired
    }

    render() {
        return <View>
            <Text style={{fontSize: 20, backgroundColor: 'red'}}>姓名：{this.props.name}</Text>
            <Text style={{fontSize: 20, backgroundColor: 'red'}}>年龄：{this.props.age}</Text>
            <Text style={{fontSize: 20, backgroundColor: 'red'}}>性别：{this.props.sex}</Text>
        </View>
    }
}







