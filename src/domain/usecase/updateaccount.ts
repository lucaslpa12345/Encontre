import {httpresponse} from '../../data/protocols/httpclient/httpresponse';


export interface updateaccount {
    update(password: string): Promise<httpresponse>
}
