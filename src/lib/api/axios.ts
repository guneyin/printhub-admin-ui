import axios, { AxiosHeaders, type AxiosInstance } from 'axios';
import { BASE_API_URI } from '@/constants';
import { session } from '@/state/session.svelte';

export default function client(): AxiosInstance {
	return axios.create({
		baseURL: BASE_API_URI,
		timeout: 10000,
		withCredentials: true,
		maxRedirects: 0,
		headers: getSessionHeader(),
		validateStatus: status => {
			return status >= 200 && status <= 399;
		}
	});
}

function getSessionHeader(): AxiosHeaders {
	let headers = new AxiosHeaders()
	headers.set('cookie', 'session_id=' + session.id)
	return headers;
}
