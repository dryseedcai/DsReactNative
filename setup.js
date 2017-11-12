/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import PropsComponent from './PropsComponent';

export default class setup extends Component {
    render() {
        return (
            <View style={styles.container}>
                <PropsComponent
                    //name="dryseed"
                    age={22}
                    sex='男'
                />
            </View>
        );
    }
}

/*import ExportImportComponent, {name, age, sex, sum} from './ExportImportComponent';

export default class setup extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            result: ""
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 20}}>名字：{name}</Text>
                <Text style={{fontSize: 20}}>年龄：{age}</Text>
                <Text style={{fontSize: 20}}>性别：{sex}</Text>
                <Text style={{fontSize: 20}}
                      onPress={() => {
                          var result = sum(2, 3);
                          this.setState({
                              result: result
                          });
                      }}
                >2+3={this.state.result}</Text>
            </View>
        );
    }
}*/

/*import LifecycleComponent from './LifecycleComponent';

export default class setup extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            remove: false
        })
    }

    render() {
        var view = this.state.remove ? null : <LifecycleComponent/>;
        var text = this.state.remove ? "让他复活" : "干掉他";
        return (
            <View style={styles.container}>
                <Text
                    style={{fontSize: 20}}
                    onPress={() => {
                        this.setState({
                            remove: !this.state.remove
                        })
                    }}
                >{text}</Text>
                {view}
            </View>
        );
    }
}*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginTop: 50
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
