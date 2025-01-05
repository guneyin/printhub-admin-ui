import type { AxiosError } from "axios";

type Error = { error: string };
export type ApiError = { status: number, error: string };

export const apierror = (e: AxiosError): ApiError => {
    let status = e.response?.status ? e.response?.status : 500;
    let error = e.response?.data ? (e.response?.data as Error).error : e.message;
    throw { status, error };
}

export const customerror = (error: string): ApiError => {
    throw { status: 500, error}
}