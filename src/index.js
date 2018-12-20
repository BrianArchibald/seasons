import React from 'react';
import ReactDOM from 'react-dom';


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
	constructor(props){
		super(props);
		// This is ONLY TIME we direct assign to state, otherwise use setState
		this.state = { lat: null, errorMessage: '' };

		window.navigator.geolocation.getCurrentPosition(
	 		(position) => {
	 			// Have to call setState to update 
	 			this.setState({lat: position.coords.latitude});

	 			// We dont write -- this.state.lat = position.coords.latitude
	 		},
	 		(err) => {
	 			this.setState({ errorMessage: err})
	 		}
 		);
	}

// // Is called when component is called
// componentDidMount() {
// 	console.log('comp did mount');
// }

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
			return<div>Latitude: {this.state.lat}</div>;
		}

		return <div>Loading!</div>;
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);