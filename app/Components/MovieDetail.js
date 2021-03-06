'use strict';

import React,{ Component } from 'react';
import styles from '../Styles/Main'
import {
    Text,
    View,
    Image,
    ListView,
	ActivityIndicator
} from 'react-native';

class MovieList extends Component{
	constructor(props){
		super(props);

		this.state = {
			movieDetail:'',
			loaded:false
		};

		const REQUEST_URL = `https://api.douban.com/v2/movie/subject/${this.props.movie.id}`;

		this.fetchData(REQUEST_URL);
	}

	fetchData(REQUEST_URL){
        fetch(REQUEST_URL)
        .then(response => response.json())
        .then(responseData => {
            this.setState({
				movieDetail:responseData,
				loaded:true
            });
        })
        .done();
    }

	render(){
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

		let movie = this.state.movieDetail;
		let summary = movie.summary.split(/\n/).map( p => (
			<View key={p} style={{marginBottom:15,paddingLeft:6,paddingRight:6}}>
				<Text style={styles.itemText}>{p}</Text>
			</View>
		));


		return (
			<View style={[styles.container,{paddingTop:70}]}>
				<View style={[styles.item,{flexDirection:'column'}]}>
					{summary}
				</View>
			</View>
		);
	}
}

export default MovieList;
