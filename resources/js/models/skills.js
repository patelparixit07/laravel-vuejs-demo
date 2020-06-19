class skills {

	static all(then)
	{
		return axios.get('/skills').then(({data}) => then(data));
	}
	
}

export default skills;