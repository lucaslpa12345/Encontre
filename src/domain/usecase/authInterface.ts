export type AccountModel = {
     email: string,
     password: string
}


export interface AuthTypes {
     auth(data: AccountModel): Promise<any>
}


