import React, { Component } from 'react';

class CanvasDrawing extends Component {
	constructor(props) {
		super(props);
		this.canvas = null;
		this.ctx = null;
		this.pos = {
			drawable: false,
			x: -1,
			y: -1
		};
		this.state = {};
	}

	componentDidMount = () => {
		// this.canvas = document.getElementById('canvas');
		this.ctx = this.canvas.getContext('2d');
		console.log(this.ctx);
		this.canvas.addEventListener('mousedown', this._handleDrawListener);
		this.canvas.addEventListener('mousemove', this._handleDrawListener);
		this.canvas.addEventListener('mouseup', this._handleDrawListener);
		this.canvas.addEventListener('mouseout', this._handleDrawListener);
	};

	render() {
		return (
			<div style={{ width: '80%', height: 500, margin: 15, border: '1px solid #333' }}>
				<canvas
					ref={ref => {
						this.canvas = ref;
					}}
					// id="canvas"
					style={{ width: '100%', height: '100%', background: '#f1f1f1' }}
					// height="500"
				/>
			</div>
		);
	}

	/**
   * 
   */
	_handleDrawListener = event => {
		switch (event.type) {
			case 'mousedown':
				this._handleInitDraw(event);
				break;
			case 'mousemove':
				if (this.pos.drawable) {
					this._handleDraw(event);
				}
				break;
			case 'mouseup':
			case 'mouseout':
				this._handleFinishDraw();
				break;
			default:
				break;
		}
	};

	/**
   * 
   */
	_handleInitDraw = event => {
		const coors = this._handleGetPosition(event);
		this.ctx.beginPath();
		this.pos.drawable = true;
		this.pos.X = coors.X;
		this.pos.Y = coors.Y;
		console.log('_handleInitDraw : ', this.pos);
		this.ctx.moveTo(this.pos.X, this.pos.Y);
	};

	/**
   * 
   */
	_handleDraw = event => {
		const coors = this._handleGetPosition(event);
		this.ctx.lineTo(coors.X, coors.Y);
		this.pos.X = coors.X;
		this.pos.Y = coors.Y;
		console.log('_handleDraw : ', this.pos);
		this.ctx.stroke();
	};
	/**
   * 
   */
	_handleFinishDraw = () => {
		this.pos.drawable = false;
		this.pos.X = -1;
		this.pos.Y = -1;
	};

	/**
   * 
   */
	_handleGetPosition = event => {
		const x = event.pageX - this.canvas.offsetLeft;
		const y = event.pageY - this.canvas.offsetTop;
		return { X: x, Y: y };
	};
} //

export default CanvasDrawing;
