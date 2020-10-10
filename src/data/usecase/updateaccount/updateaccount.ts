import {updateaccount} from '../../../domain/usecase/updateaccount';
import {httpresponse} from '../../protocols/httpclient/httpresponse';
import {httpClient} from '../../protocols/httpclient/httpclient';
import {} from '../../../infra/http/axios.http-client';
export class UpdateAccount implements updateaccount {
  constructor(
         private readonly httpPutClient: httpClient,
         private readonly url : string,
  ) {}
  async update(password: string): Promise<httpresponse> {
    console.log('doidera');
    const res = await this.httpPutClient.put(this.url, password);

    if (res.status !== 200) {
      return {
        status: 500,
        message: 'Erro não identificado',
      };
    }
    return new Promise((resolve) => resolve({
      status: 200,
      message: 'Senha modificada com sucesso',
    }));
  }
}

