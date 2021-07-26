import {instance, APIResponsType, ResultCodeCaptcha, ResultCodesEnum,} from "./API";


type MeResponseDataType = {
        id: number
        email: string
        login: string
}

type LoginResponseDataType = {
        userId: number
}

export const authAPI = {
    me() {
        return instance.get<APIResponsType<MeResponseDataType>>(`auth/me`).then(res => res.data);
    },

    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {

        return instance.post<APIResponsType<LoginResponseDataType, ResultCodesEnum | ResultCodeCaptcha>>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`);
    },
}
