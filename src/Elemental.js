import React, { Component } from 'react'
// import { Row, Col, DemoBox } from 'elemental'
import { sharedState, sharedClients } from "./data";

class Elemental extends Component {
	constructor(props) {
		super(props);
		this.state = sharedState;
	}

	render() {

		return(
			<div>
				<h1>{this.props.title}</h1>
				<hr/>
			</div>
		)

	}
}

export default Elemental;