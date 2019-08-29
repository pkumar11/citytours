import React, { Component } from 'react';
import { tourData } from '../../tourData';
import './tourlist.scss';
import Tour from '../Tour/Tour';
class TourList extends Component {
	state = {
		tours: []
	};
	async componentDidMount() {
		const data = await tourData;
		this.setState({
			tours: data
		});
	}

	removeTour = (id) => {
		const { tours } = this.state;
		const sortedTours = tours.filter((tour) => tour.id !== id);
		this.setState({
			tours: sortedTours
		});
	};
	render() {
		const { tours } = this.state;
		console.log(this.state.tours);
		return (
			<section className="tourlist">
				<h1 className="title">Wonders of the World</h1>
				{/* <Tour /> */}
				{tours.map((tour) => <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />)}
			</section>
		);
	}
}

export default TourList;
