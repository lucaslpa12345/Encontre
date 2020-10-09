import axios from 'axios';
import {httpPostClient, httresponse} from './';


export class AxiosHttpClient implements httpPostClient {
  async post(url: string, data: any): Promise<httresponse> {
    try {
      const res = await axios.post(url, data, {validateStatus: () => {
        return true;
      }});
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
