import axios from 'axios';
import {AccountModel, httpPostClient, httresponse} from './';


export class AxiosHttpClient implements httpPostClient {
  async post(url: string, data: AccountModel): Promise<httresponse> {
    try {
      const res = await axios.post(url, data);
      return new Promise((resolve) => resolve(
          {
            status: res.status,
            body: res.data,
          },
      ));
    } catch (error) {
      return error;
    }
  }
}
;
