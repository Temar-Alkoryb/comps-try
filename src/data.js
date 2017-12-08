const sharedState = {
    delivery: '',
    payment: '',
    client: '',
    contactPerson: '',
    notes: '',
    address: {
    phoneNumber: '0684529612',
        email: 'qwe@qwe.qwe',
        actionDate: '',
        lastActionDate: '',
        country: 'Україна',
        index: '08125',
        region: 'Київський',
        address: 'Академика Палладина просп. 15'

    }
};

const sharedClients = [
	{
		contactPerson: 'Петренко Петро Петрович',
		phoneNumber: '0671234567',
		email: 'asdf@gmail.com',
	},
    {
		contactPerson: 'Ступа Аврам Борисович',
		phoneNumber: '0981234567',
		email: 'qwer@ukr.net',
	},
    {
		contactPerson: 'Боровик Віталій Максимович',
		phoneNumber: '0931234567',
		email: 'abcdef@i.ua',
	}
];

export { sharedState, sharedClients };