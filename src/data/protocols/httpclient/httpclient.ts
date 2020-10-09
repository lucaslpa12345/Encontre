import {httresponse} from '../../../data/protocols/httpclient/httpresponse';
export interface httpPostClient {
      post(url: string, data: any): Promise<httresponse>
}
