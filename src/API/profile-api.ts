import {PhotosType, ProfileType} from "../types/types";
import {instance, APIResponsType} from "./API";

type SavePhotoResponseDataType ={
    photos:PhotosType
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`).then(res=>res.data)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`).then(res=>res.data)
    },
    updateStatus(status: string) {
        return instance.put<APIResponsType>(`profile/status`, {status: status}).then(res=>res.data)
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put<APIResponsType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }).then(res=>res.data)

    },
    saveProfile(profile: ProfileType) {
        return instance.put<APIResponsType>(`profile`, profile).then(res=>res.data)
    }
}
