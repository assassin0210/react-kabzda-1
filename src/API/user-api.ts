import {GetUsersItems, instance, APIResponsType} from "./API";
import {AxiosPromise} from "axios";



export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<GetUsersItems>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res =>  res.data)
    },
    follow(userId: number) {

        return instance.post<APIResponsType>(`follow/${userId}`,).then(res=>res.data)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`).then(res=>res.data) as Promise<APIResponsType>
    },

}
