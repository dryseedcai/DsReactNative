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

export default class LifecycleComponent extends Component {

    constructor(props) {
        super(props)
        console.log("---constructor---")
        this.state = {
            count: 0
        }
    }

    componentWillMount() {
        console.log("---componentWillMount---")
    }

    componentDidMount() {
        console.log("---componentDidMount---")
    }

    componentWillReceiveProps(nextProps) {
        console.log("---componentWillReceiveProps---")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("---shouldComponentUpdate---")
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("---componentWillUpdate---")
    }

    componentDidUpdate() {
        console.log("---componentDidUpdate---")
    }

    componentWillUnmount() {
        console.log("---componentWillUnmount---")
    }

    render() {
        console.log("---render---")
        return <View>
            <Text
                style={{fontSize: 20, backgroundColor: 'red'}}
                onPress={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}
            >有本事你打我呀</Text>
            <Text style={{fontSize: 20}}>被打了{this.state.count}次</Text>
        </View>
    }
}







