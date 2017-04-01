'use strict';

import React,{ Component } from 'react';
import styles from '../Styles/Main';
import SearchResult from './SearchResult';

import {
    Text,
    View,
    Image,
    ListView,
	TextInput
} from 'react-native';


class SearchForm extends Component{
	constructor(props){
		super(props);
        this.state = {
            qurey:''
        }
        console.log(fetch);
	}

    fetchData(){
        const REQUEST_URL = `https://api.douban.com/v2/movie/search?q=${this.state.query}`;

        fetch(REQUEST_URL)
        .then(response => response.json())
        .then(responseData => {
            console.log(responseData);

            console.log(this.props);
            this.props.navigator.push({
                component:SearchResult,
                title:responseData.title,
                passProps:{
                    results:responseData.subjects
                }
            })
        })
        .done();
    }

	render(){
		return (
			<View style={[styles.container,{paddingTop:60}]}>
				<View
					style={{
						paddingTop:7,
						paddingLeft:7,
						paddingRight:7,
						borderColor:'rgba(100,53,201,0.1)',
						borderBottomWidth:1
					}}>
					<TextInput
                        style={{height:50}}
                        placeholder="搜索"
                        placeholderTextColor="#6435c9"
                        autoFocus
                        clearButtonMode="while-editing"
                        clearTextOnFocus={true}
                        enablesReturnKeyAutomatically={true}
                        returnKeyType="search"
                        onChangeText={(query)=>{
                            this.setState({
                                query
                            });
                        }}
                        onSubmitEditing={this.fetchData.bind(this)}
     />
				</View>
			</View>
		);
	}
}

export default SearchForm;
