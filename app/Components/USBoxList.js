'use strict';

import React,{ Component } from 'react';
import styles from '../Styles/Main';
import MovieDetail from './MovieDetail';
import {
    Text,
    View,
    Image,
    ListView,
	ActivityIndicator,
	TouchableHighlight
} from 'react-native';

export default class USBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies:new ListView.DataSource({
                rowHasChanged:(row1,row2) => row1 !== row2
            }),
            loaded:false
        };

        this.fetchData();
    }

    fetchData(){
        const REQUEST_URL = 'https://api.douban.com/v2/movie/us_box';

        fetch(REQUEST_URL)
        .then(response => response.json())
        .then(responseData => {
            this.setState({
                movies:this.state.movies.cloneWithRows(responseData.subjects),
                loaded:true
            });
        })
        .done();
    }

	showMovieDetail(movie){
		this.props.navigator.push({
			title:movie.title,
			component:MovieDetail,
			passProps:{movie}
		});
	}

    renderMovieList(movie){
        return (
			<TouchableHighlight
				underlayColor="rgba(34,26,38,0.2)"
				onPress={ () => {this.showMovieDetail(movie.subject)}}
			>
				<View style={styles.item}>
					<View style={styles.itemImage}>
						<Image source={{uri:movie.subject.images.large}} style={styles.image}></Image>
					</View>
					<View style={styles.itemContent}>
						<Text style={styles.itemHeader}>{movie.subject.title}</Text>
						<Text style={styles.itemMeta}>
							{movie.subject.original_title} ( {movie.subject.year} )
						</Text>
						<Text style={styles.redText}>
							{movie.subject.rating.average}
						</Text>
					</View>
				</View>
			</TouchableHighlight>
        );
    }

    render() {
        if (!this.state.loaded) {
            return (
                <View style={styles.container}>
                    <View style={styles.loading}>
						<ActivityIndicator
							size="large"
							color="#6435c9"
						/>
                    </View>
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <ListView
                    dataSource = {this.state.movies}
                    renderRow = {this.renderMovieList.bind(this)}
                ></ListView>
            </View>
        );
    }
}
