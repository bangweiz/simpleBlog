export interface LoginParam {
    account: string
    password: string
}

export interface RegisterParam extends LoginParam {
    nickname: string
}