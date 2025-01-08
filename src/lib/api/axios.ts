import axios, { type AxiosInstance, type CreateAxiosDefaults } from 'axios';
import { BASE_API_URI } from '@/constants';

function config(): CreateAxiosDefaults {
	return {
		baseURL: BASE_API_URI,
		timeout: 10000,
		withCredentials: true,
		maxRedirects: 0,
		validateStatus: status => {
			return status >= 200 && status < 400;
		}
	}
}

export default function client(locals?: App.Locals): AxiosInstance {
	let instance = axios.create(config());

	if (locals) {
		instance.defaults.headers.common['cookie'] = 'session_id=' + locals.session_id as string;
	}


	return instance;
}
