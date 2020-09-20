export type authParam = {
     email: string,
     password: string
}
type token = {
     token: string
}

export interface AuthTypes {
     auth(data: authParam): Promise<any>
}


