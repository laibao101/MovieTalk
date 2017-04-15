/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableHighlight,
    Alert,
    ScrollView,
    Image
} from 'react-native';
// import TimerMixin from 'react-timer-mixin';
var TimerMixin = require('react-timer-mixin');
import imageData from './app/Assets/ImageData.json';

const { height, width } = Dimensions.get('window');

// export default class MovieTalk extends Component {
//     render() {
//         return (
//             <ScrollView style={{flex:1}}
//                 horizontal = {true}
//                 showsHorizontalScrollIndicator={false}
//             >
//
//             </ScrollView>
//         );
//     }
//     _onPressButton() {
//         Alert.alert('Alert Title', '这是message');
//     }
// }

var MovieTalk = React.createClass({
    //注册计数器
    mixins: [TimerMixin],
    getInitialState: function () {
        return { currentPage: 0 };
    },
    getDefaultProps: function () {
        return { duration: 2000 };
    },
    render: function () {
        return (
            <View style={styles.container}>
                <ScrollView ref="scrollView" horizontal={true} //隐藏水平滚动条
                    showsHorizontalScrollIndicator={false} //自动分页
                    pagingEnabled={true} style={styles.scrollContainer} // onScroll = {this.execScroll}
                    onMomentumScrollEnd={(e) => this.execScrollEnd(e)}
                    onScrollBeginDrag={this.onScrollBeginDrag}
                    onScrollEndDrag={this.onScrollEndDrag}
                >
                    {this.renderAllImage()}
                </ScrollView>
                {/*返回指示器*/}
                <View style={styles.pagingViewStyle}>
                    {/* 返回五个圆点 */}
                    {this.renderPageCircle()}
                </View>
            </View>
        );
    },
    componentDidMount: function () {
        this.setTimeout(
      () => { console.log('I do not leak!'); },
      500
    );
        this.startTimer();

    },
    startTimer: function () {
        var scrollView = this.refs.scrollView;
        var that = this;

        var begin = new Date().toLocaleTimeString();
        console.log(begin);

        this.timer = this.setInterval(function () {
            var end = new Date().toLocaleTimeString();
            console.log(end);

            var nextPage = that.state.currentPage + 1;
            if (nextPage == imageData.data.length) {
                nextPage = 0
            }
            that.setState({ currentPage: nextPage })

            var offsetX = nextPage * width;
            scrollView.scrollResponderScrollTo({ x: offsetX });
        }, this.props.duration)

    },
    onScrollBeginDrag: function () {
        this.clearInterval(this.timer)
    },
    onScrollEndDrag: function () {
        this.startTimer();
    },
    //返回所有圆点
    renderAllImage: function () {
        var view = [];

        view.push(
            <Image key={1} style={styles.item} source={require('./app/Assets/img_01.png')}></Image>
        );

        view.push(
            <Image key={2} style={styles.item} source={require('./app/Assets/img_02.png')}></Image>
        );

        view.push(
            <Image key={3} style={styles.item} source={require('./app/Assets/img_03.png')}></Image>
        );

        view.push(
            <Image key={4} style={styles.item} source={require('./app/Assets/img_04.png')}></Image>
        );

        view.push(
            <Image key={5} style={styles.item} source={require('./app/Assets/img_05.png')}></Image>
        );

        return view;
    },
    //返回所有圆点
    renderPageCircle: function () {
        var indicatorArr = [];
        var imgsArr = imageData.data;
        var style = null;
        var that = this;
        imgsArr.map(function (item, i) {
            style = i === that.state.currentPage
                ? {
                    color: 'orange'
                }
                : {
                    color: 'white'
                }
            indicatorArr.push(
                <Text key={i} style={[
                    {
                        fontSize: 35
                    },
                    style
                ]}>&bull;</Text>
            );
        });

        return indicatorArr;
    },
    execScrollEnd: function (e) {
        var offsetX = e.nativeEvent.contentOffset.x;
        var currentPage = offsetX / width;

        this.setState({ currentPage: currentPage });
    }
});

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    scrollContainer: {
        height: 100
    },
    item: {
        width: width,
        height: 100
    },
    pagingViewStyle: {
        width: width,
        height: 25,
        backgroundColor: 'rgba(0,0,0,0.4)',
        //定位
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center'
    }

});

AppRegistry.registerComponent('MovieTalk', () => MovieTalk);
