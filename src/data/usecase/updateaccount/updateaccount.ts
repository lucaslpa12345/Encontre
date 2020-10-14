import {updateaccount} from '../../../domain/usecase/updateaccount';
import {httpresponse} from '../../protocols/httpclient/httpresponse';
import {httpClient} from '../../protocols/httpclient/httpclient';
import {} from '../../../infra/http/axios.http-client';
export class UpdateAccount implements updateaccount {
  constructor(
         private readonly httpPutClient: httpClient,
         private readonly url : string,
  ) {}
  async update(password: string, token: string): Promise<httpresponse> {
    const data = {
      password,
      token: this.url + token,
    };
    const res = await this.httpPutClient.put(this.url, data);
    if (res.status === 500) {
      return {
        status: 500,
        message: 'Erro não identificado',
      };
    }
    if (res.status === 400) {
      return {
        status: 400,
        message: res.body.error,
      };
    }
    return new Promise((resolve) => resolve({
      status: 200,
      message: 'Senha modificada com sucesso',
    }));
  }
}

