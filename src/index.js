import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


// Functional Component 

// const App = () => {
// 	window.navigator.geolocation.getCurrentPosition(
// 		(position) => console.log(position),
// 		(err) => console.log(err)
// 	);

// 	return <div>Hi there!</div>;	
// };


// Class component 

class App extends React.Component {
	// constructor(props){
	// 	super(props);
	// 	// This is ONLY TIME we direct assign to state, otherwise use setState
	// 	this.state = { lat: null, errorMessage: '' };
	// }
	// This is the second way to initialize state, first is with constructor.
	state = { lat: null, errorMessage: '' };

	// Is called when component is called
	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			// Have to call setState to update 
	 		position => this.setState({lat: position.coords.latitude}),
			// We dont write -- this.state.lat = position.coords.latitude
	 		err => this.setState({ errorMessage: err})	
		);
	}

	// // Is called when component is updated
	// componentDidUpdate() {
	// 	console.log('comp updated');
	// }

	// React says we have to define render!
	render() {	
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		}

		if (!this.state.errorMessage && this.state.lat) {
			// We are taking a value {this.state.lat} on state and passing it as a prop to seasondisplay
			return<SeasonDisplay lat={this.state.lat} />;
		}

		return <div>Loading!</div>;
	}
}


ReactDOM.render(
	<App />,
	document.querySelector('#root')
);