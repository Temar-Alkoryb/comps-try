import React, { Component } from 'react'
import { Grid, Input, Select, TextArea, Icon, Popup, Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { sharedState, sharedClients } from "./data";


const clients = ['client 01', 'client 02', 'client 03', 'client 04', 'client 05'];

let table;

class Semantic extends Component {
    constructor(props) {
        super(props);
        this.state = sharedState;
        this.sharedClients = sharedClients;
    }

	handleComboboxChange = (prop, value) => {
		let change = {};
		change[prop] = value;
		this.setState(change);
	};

    componentWillMount() {
		table = <Table singleLine>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Контактна особа</Table.HeaderCell>
					<Table.HeaderCell>Номер телефону</Table.HeaderCell>
					<Table.HeaderCell>E-mail</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{
					sharedClients.map(function(client, id) {
						return <Table.Row key={id}>
							<Table.Cell>{client.contactPerson}</Table.Cell>
							<Table.Cell>{client.phoneNumber}</Table.Cell>
							<Table.Cell>{client.email}</Table.Cell>
						</Table.Row>
					})
				}
			</Table.Body>
		</Table>
	}

	render() {
		const clientOptions = clients.map((client) => ({value: client, text: client, key: client}));

    	return(

            <div className='example_2'>
                <h1>{this.props.title}</h1>
				<Grid>
                    <Grid.Column mobile={16} tablet={8} computer={8}>
						<Grid>
							<Grid.Column width={3}>
								<label htmlFor="">Клієнт</label>
							</Grid.Column>

							<Grid.Column width={13}>
								<Select name="client"
										label="Client"
										options={clientOptions}
										onChange={this.handleComboboxChange.bind(this, 'client')}>
								</Select>
							</Grid.Column>
						</Grid>

						<Grid>
							<Grid.Column width={3}>
								<label htmlFor="">Адреса</label>
							</Grid.Column>
							<Grid.Column width={3}>
								<Input fluid
									   size='small'/>
								<small className="input-bottom-label">Країна</small>
							</Grid.Column>
							<Grid.Column width={3}>
								<Input fluid
									   size='small'/>
								<small className="input-bottom-label">Індекс</small>
							</Grid.Column>
							<Grid.Column width={7}>
								<Input fluid
									   size='small'/>
								<small className="input-bottom-label">Регіон</small>

							</Grid.Column>
							<Grid.Column width={16}>
								<Input fluid
									   size='small'/>
								<small className="input-bottom-label">Адреса</small>
							</Grid.Column>
						</Grid>

						<Grid>
							<Grid.Column width={3}>
								<label htmlFor="">Номер телефону</label>
							</Grid.Column>
							<Grid.Column width={13}>
								<Input fluid
									   size='small'/>
							</Grid.Column>
						</Grid>

						<Grid>
							<Grid.Column width={3}>
								<label htmlFor="">E-mail</label>
							</Grid.Column>
							<Grid.Column width={13}>
								<Input fluid
									   size='small'/>
							</Grid.Column>
						</Grid>

						<Grid>
							<Grid.Column width={3}>
								<label htmlFor="">Нотатка</label>
							</Grid.Column>
							<Grid.Column width={13}>
								<TextArea rows={4} autoHeight />
							</Grid.Column>
						</Grid>

						<Grid>
							<Grid.Column width={3}>
								<label htmlFor="">Контактна особа</label>
							</Grid.Column>
							<Grid.Column width={13}>
								<Input fluid
									   size='small' />


								<Popup
									trigger={<Icon name='caret down' size='large' className="caret-down__right"  />}
									content={table}
									on='click'
									position='top right'
								/>

							</Grid.Column>

						</Grid>


                    </Grid.Column>
				</Grid>
                <hr/>
            </div>
		)
	}
}

export default Semantic