import axios from 'axios';
import {httpClient, httpresponse} from './';


export class AxiosHttpClient implements httpClient {
  async post(url: string, data: any): Promise<httpresponse> {
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

  async put(url: string, data: any): Promise<httpresponse> {
    try {
      const res = await axios.put(url, data, {validateStatus: () => {
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

  async getAll(url: string, token: string, page: number): Promise<httpresponse> {
    const res = await axios.get(url+page, {headers: {
      authorization: `barear ${token}`,
    },
    validateStatus: () => {
      return true;
    },
    });
    return new Promise((resolve) => resolve(
        {
          status: res.status,
          body: res.data,
        },
    ));
  }

  async postWithToken(url: string, data: any): Promise<httpresponse> {
    try {
      const res = await axios.post(url, data, {
        headers: {
          authorization: `barear ${data.token}`,
        },
        validateStatus: () => {
          return true;
        },
      });


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
