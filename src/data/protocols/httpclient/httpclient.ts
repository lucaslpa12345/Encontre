import {httpresponse} from '../../../data/protocols/httpclient/httpresponse';
export interface httpClient {
      post(url: string, data: any): Promise<httpresponse>
      put(url: string, data: any): Promise<httpresponse>
      getAll(url: string, token: string, page: number): Promise<httpresponse>
      postWithToken(url: string, data: any): Promise<httpresponse>
      get(url: string, data: any): Promise<httpresponse>
}
