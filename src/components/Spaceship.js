import React from 'react';


class Spaceship extends React.Component {
	render() {
		return <div>
			<h1>{this.props.name}</h1>
			<h2>{this.props.speed}</h2>
			<h3>{this.props.hasRockets}</h3>
			<h4>{this.props.colors.join(' ')}</h4>

		</div>

	}
}

Spaceship.defaultProps = {
	name: "X-Wing",
	speed: "slow",
	hasRockets: false,
	colors: ['red', 'black', 'white']
}

export default Spaceship;