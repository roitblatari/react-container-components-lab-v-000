import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'oPxVdolpExBC1utjG2SYf3GGi5VYPZw4';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
	state = {
		reviews: []
	};
	componentDidMount() {
		fetch(URL).then((res) => res.json()).then((r) => this.setState({ reviews: r.results }));
	}

	render() {
		return (
			<div className="latest-movie-reviews">
				<MovieReviews reviews={this.state.reviews} />
			</div>
		);
	}
}
export default LatestMovieReviewsContainer;
