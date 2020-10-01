import {httresponse} from '../../data/protocols/httpclient/httpresponse';
export interface RegisterAccountModel {
     name: string,
     email: string,
     password: string,
     passwordConfirm: string
}

export interface RegisterTypes {
    reg(data: RegisterAccountModel): Promise<httresponse>
}
