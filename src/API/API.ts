import axios from "axios"
import {UsersType} from "../types/types";

export interface GetUsersItems {
    items: Array<UsersType>
    totalCount: number
    error: string | null
}

export type APIResponsType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}


export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "739277cf-ec80-4bfb-9e15-afc7debd1366"
    }
});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeCaptcha {

    CaptchaIsRequired = 10
}








