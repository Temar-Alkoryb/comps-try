import React, { Component } from 'react';
import { Select } from 'rctui';
import { sharedState, sharedClients } from "./data";

const clients = ['client 01', 'client 02', 'client 03', 'client 04', 'client 05'];

class ReactUI extends Component {
	constructor(props) {
		super(props);
		this.state = sharedState;
	}

	render() {
		return(
			<div>
				<h1>{this.props.title}</h1>
					<Select
						grid={{width: 1/2}}
						data={[]}/>
			</div>
		)

	}
}

export default ReactUI;