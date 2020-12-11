
import {httpresponse} from '../../protocols/httpclient/httpresponse';
import {httpClient} from '../../protocols/httpclient/httpclient';
import {data, publish} from '../../../domain/usecase/publishinterface';


export class Publish implements publish {
  constructor(private readonly httclient: httpClient,
    private readonly url : string,
  ) {}
  async pub(data: data) : Promise<httpresponse> {

    console.log('data',this.url)
    const res = await this.httclient.postWithToken(this.url, data);
    console.log('res', res)
    if (!res.status) {
      return new Promise((resolve) => resolve({
        status: 500,
        message: 'Erro no servidor.',
      }));
    }
    return new Promise((resolve) => resolve(res));
  }
}
