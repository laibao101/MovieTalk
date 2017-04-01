'use strict';

import React,{ Component } from 'react';
import styles from '../Styles/Main';
import MovieDetail from './MovieDetail';

import {
    Text,
    View,
    Image,
    ListView,
	TouchableHighlight
} from 'react-native';

export default class SearchResult extends Component{
	constructor(props){
		super(props);

		let dataSource = new ListView.DataSource({
			rowHasChanged:(row1,row2) => row1 !== row2
		});

		this.state = {
			movies:dataSource.cloneWithRows(this.props.results)
		};


	}

	renderMovieList(movie){
        return (
			<TouchableHighlight
				underlayColor="rgba(34,26,38,0.2)"
				onPress={ () => {this.showMovieDetail(movie)}}
			>
				<View style={styles.item}>
					<View style={styles.itemImage}>
						<Image source={{uri:movie.images.large}} style={styles.image}></Image>
					</View>
					<View style={styles.itemContent}>
						<Text style={styles.itemHeader}>{movie.title}</Text>
						<Text style={styles.itemMeta}>
							{movie.original_title} ( {movie.year} )
						</Text>
						<Text style={styles.redText}>
							{movie.rating.average}
						</Text>
					</View>
				</View>
			</TouchableHighlight>
        );
    }

	showMovieDetail(movie){
		this.props.navigator.push({
			title:movie.title,
			component:MovieDetail,
			passProps:{movie}
		});
	}

	render(){
		return (
			<View style={styles.container}>
				<ListView
					dataSource={this.state.movies}
					renderRow={this.renderMovieList.bind(this)}
				></ListView>
			</View>
		);
	}
}
