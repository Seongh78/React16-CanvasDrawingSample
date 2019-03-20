import React, { Component } from 'react';
import './App.css';
import CanvasDrawing from './CanvasDrawing';

class App extends Component {
	constructor(props) {
		super(props);

		this.canvas = React.createRef();
	}

	render() {
		return (
			<div>
				<CanvasDrawing />
			</div>
		);
	}
}

export default App;
