import {authParam} from '../../../domain/usecase/authInterface';
import {httpPostClient} from '../../protocols/httpclient/httpclient';

export class Authenticate {
  constructor(
    private readonly url:string,
    private readonly httpPostClient:httpPostClient ) {}


  async auth(data: authParam): Promise<any> {
    await this.httpPostClient.post(this.url);
    return new Promise((resolve) => resolve(''));
  }
}
