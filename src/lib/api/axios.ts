import axios, { type AxiosInstance, type CreateAxiosDefaults } from 'axios';
import { BASE_API_URI } from '@/constants';
import { type Cookies } from '@sveltejs/kit';

function config(): CreateAxiosDefaults {
	return {
		baseURL: BASE_API_URI,
		timeout: 10000,
		withCredentials: true,
		validateStatus: status => {
			return status >= 200 && status < 300;
		}
	}
}

export default function client(c?: Cookies): AxiosInstance {
	let instance = axios.create(config());

	if (c) {
		const sessionId = c.get("session_id") as string;
		instance.defaults.headers.common['cookie'] = 'session_id=' + sessionId;
	}


	return instance;
}

// class AxiosWithCookies {
// 	private readonly instance: AxiosInstance;
// 	constructor() {
// 		this.instance = axios.create(config());
// 		this.instance.interceptors.request.use(x => {
// 			console.log(x);
// 			return x;
// 		});
// 	}
//
// 	public Client(): AxiosInstance {
// 		return this.instance;
// 	}
//
// 	public ClientWithCookies(cookies: Cookies): AxiosInstance {
// 		const sessionId = cookies?.get("session_id") as string;
// 		this.instance.defaults.headers.common['cookie'] = 'session_id=' + sessionId;
// 		return this.instance;
// 	}
// }
//
// function ax(): AxiosWithCookies {
// 	return new AxiosWithCookies();
// }

// export default ax;