import axios from 'axios';
import {AccountModel, httpPostClient, httresponse} from './';


export class AxiosHttpClient implements httpPostClient {
  async post(url: string, data: AccountModel): Promise<httresponse> {
    await axios.post(url, data);
    return new Promise((resolve) => resolve(

    ));
  }
}
;
