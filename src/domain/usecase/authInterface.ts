export type AccountModel = {
     name?: string,
     email: string,
     password: string,
     passwordConfirm?: string
}


export interface AuthTypes {
     auth(data: AccountModel): Promise<any>
}


