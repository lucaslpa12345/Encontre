import {httresponse} from '../../data/protocols/httpclient/httpresponse';
export interface sendEmailDataModel {
     email: string,
}

export interface sendEmailInterface {
    send(email: string): Promise<httresponse>
}
