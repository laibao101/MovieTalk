/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import MovieList from './app/Components/MovieList';
import USBox from './app/Components/USBox';
import icons from './app/Assets/Icon';
import Featured from './app/Components/Featured';
import Search from './app/Components/Search';

import React, {
    Component
} from 'react';

import {
    AppRegistry,
    TabBarIOS
} from 'react-native';

export default class MovieTalk extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectedTab:'search'
        }
    }
    render() {
        return (
            <TabBarIOS barTintColor="darkslateblue" tintColor="white">
                <TabBarIOS.Item
                    icon={{uri:icons.star,scale:4.6}}
                    title="推荐电影"
                    selectedIcon={{uri:icons.starActive,scale:4.6}}
                    selected={this.state.selectedTab === 'featured' }
                    onPress={()=> {
                        this.setState({
                            selectedTab:'featured'
                        })
                    }}
                >
                    <Featured></Featured>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon={{uri:icons.board,scale:4.6}}
                    title="北美电影"
                    selectedIcon={{uri:icons.boardActive,scale:4.6}}
                    selected={this.state.selectedTab === 'us_box' }
                    onPress={()=> {
                        this.setState({
                            selectedTab:'us_box'
                        })
                    }}
                >
                    <USBox></USBox>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon={{uri:icons.search,scale:4.6}}
                    title="搜索"
                    selectedIcon={{uri:icons.searchActive,scale:4.6}}
                    selected={this.state.selectedTab === 'search' }
                    onPress={()=> {
                        this.setState({
                            selectedTab:'search'
                        })
                    }}
                >
                    <Search></Search>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}


AppRegistry.registerComponent('MovieTalk', () => MovieTalk);
