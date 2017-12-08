import React, { Component } from 'react';
import { Row, Col, Form, DatePicker, Input, Select, Icon, Popover, Table } from 'antd';
import 'antd/dist/antd.css';
// import data from './data'

const FormItem = Form.Item;
const Option = Select.Option;
const InputGroup = Input.Group;
const { TextArea } = Input;

const deliveryData = ['Пошта', 'Самовивіз', 'Доставка кур\'єром'];
const paymentData = ['Безготівковий',  'Готівка', 'Безготівковий(карточка)'];
const clients = ['client 01', 'client 02', 'client 03', 'client 04', 'client 05'];

const columns = [
	{
		title: 'Контактна особа',
		dataIndex: 'contactPerson',
		key: 'contactPerson',
		render: text => <span>{text}</span>,
	},
	{
		title: 'Номер телефону',
		dataIndex: 'phoneNumber',
		key: 'phoneNumber',
	},
	{
		title: 'E-mail',
		dataIndex: 'email',
		key: 'email',
	}];

const tableData = [{
	key: '1',
	contactPerson: 'Петренко Петро Петрович',
	phoneNumber: '0671234567',
	email: 'asdf@gmail.com',
}, {
	key: '2',
	contactPerson: 'Ступа Аврам Борисович',
	phoneNumber: '0981234567',
	email: 'qwer@ukr.net',
}, {
	key: '3',
	contactPerson: 'Боровик Віталій Максимович',
	phoneNumber: '0931234567',
	email: 'abcdef@i.ua',
}];



class Ant extends Component {

    constructor(props) {
        super(props);
        this.state = {
			delivery: '',
			payment: '',
			client: '',
			contactPerson: '',
			notes: '',
            phoneNumber: '0684529612',
            email: 'qwe@qwe.qwe',
            actionDate: '',
            lastActionDate: '',
            country: 'Україна',
            index: '08125',
            region: 'Київський',
            address: 'Академика Палладина просп. 15'
		};
    }

    handleComboboxChange = (prop, value) => {
        let change = {};
        change[prop] = value;
        this.setState(change);
    };

    handleInputChange = (e) => {
        let change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    };

    render() {
		const deliveryOptions = deliveryData.map((deliveryOption) => <Option key={deliveryOption}>{deliveryOption}</Option>);
		const paymentOptions = paymentData.map((paymentOption) => <Option key={paymentOption}>{paymentOption}</Option>);
		const clientOptions = clients.map((client) => <Option key={client}>{client}</Option>);
        const dateTimeFormat = 'DD.MM.YYYY HH:MM';


        const clientsTable = <Table
				columns={columns}
				pagination={false}
				dataSource={tableData} />;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                md: { span: 4 }
            },
			wrapperCol: {
				xs: { span: 24 },
				md: { span: 20 }
			}
        };

		const formItemLayoutHalf = {
			labelCol: {
				xs: { span: 24 },
				md: { span: 8 }
			},
			wrapperCol: {
                xs: {span: 24},
                md: {span: 16}
            }
		};

        return (
            <div>
                <h1>{this.props.title}</h1>

                <Row type="flex" justify="space-between">
                    <Col md={12} xs={24}>
                        <Form className="ant-form">
                            <FormItem
                                {...formItemLayout}
                                label="Клієнт">
                                <Select mode="combobox"
                                        name="client"
                                        value={this.state.client}
                                        onChange={this.handleComboboxChange.bind(this, 'client')}
                                >
                                    {clientOptions}
                                </Select>
                            </FormItem>

                            <FormItem
                                {...formItemLayoutHalf}
                                label="Адреса">
							<span style={{position: 'absolute', left: 1 + 'em'}}>
								<Icon type="caret-down" className="caret-down__right"  />
							</span>
                                <InputGroup>
                                    <Col span={6}>
                                        <Input type='text'
                                               name="country"
                                               value={this.state.country}
                                               onChange={this.handleInputChange.bind(this)} />
                                        <small className="input-bottom-label">Країна</small>
                                    </Col>
                                    <Col span={6}>
                                        <Input type="text"
                                               name="index"
                                               value={this.state.index}
                                               onChange={this.handleInputChange.bind(this)} />
                                        <small className="input-bottom-label">Індекс</small>
                                    </Col>
                                    <Col span={12}>
                                        <Input type="text"
                                               name="region"
                                               value={this.state.region}
                                               onChange={this.handleInputChange.bind(this)} />
                                        <small className="input-bottom-label">Регіон</small>
                                    </Col>
                                    <Col span={24}>
                                        <Input type="text"
                                               name="address"
                                               value={this.state.address}
                                               onChange={this.handleInputChange.bind(this)} />
                                        <small className="input-bottom-label">Адреса</small>
                                    </Col>
                                </InputGroup>

                            </FormItem>

                            <FormItem
                                {...formItemLayoutHalf}
                                label="Номер телефону">
                                <Input type="text"
                                       name="phoneNumber"
                                       onChange={this.handleInputChange.bind(this)}
                                       value={this.state.phoneNumber}/>
                            </FormItem>

                            <FormItem
                                {...formItemLayoutHalf}
                                label="E-mail">
                                <Input type="text"
                                       name="email"
                                       onChange={this.handleInputChange.bind(this)}
                                       value={this.state.email}/>
                            </FormItem>
                            <FormItem
                                {...formItemLayoutHalf}
                                label="Дата та час дії">
                                <DatePicker format={dateTimeFormat}
                                            name="actionDate"
                                            onChange={this.handleComboboxChange.bind(this, 'actionDate')}/>
                            </FormItem>
                            <FormItem
                                {...formItemLayoutHalf}
                                label="Дата та час останньої події">
                                <DatePicker format={dateTimeFormat}
                                            name="lastActionDate"
                                            onChange={this.handleComboboxChange.bind(this, 'lastActionDate')}/>
                            </FormItem>
                            <FormItem
                                {...formItemLayoutHalf}
                                label="Спосіб доставки">
                                <Select value={this.state.delivery}
                                        name="delivery"
                                        onChange={this.handleComboboxChange.bind(this, 'delivery')}>
                                    {deliveryOptions}
                                </Select>
                            </FormItem>
                            <FormItem
                                {...formItemLayoutHalf}
                                label="Спосіб розрахунку">
                                <Select value={this.state.payment}
                                        name="payment"
                                        onChange={this.handleComboboxChange.bind(this, 'payment')}>
                                    {paymentOptions}
                                </Select>
                            </FormItem>
                            <FormItem
                                {...formItemLayoutHalf}
                                label="Нотатка">
                            <TextArea rows={4}
                                      name="notes"
                                      value={this.state.notes}
                                      onChange={this.handleInputChange.bind(this)} />
                            </FormItem>
                            <FormItem
                                {...formItemLayoutHalf}
                                label="Контактна особа">
                                <Input type="text"
                                       name="contactPerson"
                                       onChange={this.handleInputChange.bind(this)}
                                       value={this.state.contactPerson} />
                                <Popover placement="bottomRight"
                                         content={clientsTable} trigger="click">
                                    <Icon type="caret-down" className="caret-down__right"  />
                                </Popover>
                            </FormItem>
                        </Form>

                    </Col>
                </Row>
                <hr/>
            </div>

        );
    }
}

export default Ant;
