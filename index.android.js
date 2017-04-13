/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions, TouchableHighlight, Alert} from 'react-native';

export default class MovieTalk extends Component {
    render() {
        const {height, width} = Dimensions.get('window');
        return (
            <View style={styles.container}>
                <Text style={styles.item}>第1个</Text>
                <Text style={styles.item}>第2个</Text>
                <Text style={styles.item}>第3个</Text>
                <Text style={[
                    styles.item, {
                        alignSelf: 'flex-end'
                    }
                ]}>第4个</Text>
                <TouchableHighlight onPress={this._onPressButton}>
                    <Text >我是按钮</Text>
                </TouchableHighlight>
            </View>
        );
    }

    _onPressButton(){
        Alert.alert('Alert Title','这是message');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        backgroundColor: 'red',
        flex: 1,
        marginLeft: 10,
        textAlign: 'center'
    }
});

AppRegistry.registerComponent('MovieTalk', () => MovieTalk);
