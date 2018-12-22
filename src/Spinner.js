import React from 'react';

const Spinner = (props) => {
	<div className="ui active dimmer">
		<div className="ui big text loader">
		{props.message}
		</div>
	</div>
};

// Default properties set on Spinner
Spinner.defaultProps = {
	// Default message is now Loading if nothing is passed
	message: 'Loading...'
};

export default Spinner;