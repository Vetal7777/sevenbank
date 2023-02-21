export interface UserStateI {
    id: number | string | null,
    userInfo: UserInfoI | null,
    summeryBalance: number | null,
    currency: string | null,
}

export interface UserInfoI {
    firstname: string | null,
    surname: string | null,
    email: string | null,
    phone: number | null,
    tg: string | null,
    inst: string | null,
    fb: string | null,
    photo: string | null,
}