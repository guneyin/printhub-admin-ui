import type { AxiosError } from "axios";
import { error } from "@sveltejs/kit"

type apiError = { error: string };

export const apierror = (e: AxiosError): typeof error => {
    let status = e.response?.status ? e.response?.status : 500;
    let message = e.response?.data ? (<apiError>e.response?.data).error : e.message;

    return error(status, { message })
}

export const customerror = (message: string): typeof error => {
    return error(500, { message })
}