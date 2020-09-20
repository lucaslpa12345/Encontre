import {AccountModel} from '../../../domain/usecase/authInterface';
import {httpPostClient} from '../../../data/protocols/httpclient/httpclient';
import {InvalidError} from '../../../domain/protocols/errors/invalidError';
import {SomethingError} from '../../../domain/protocols/errors/somethingError';
import {httpstatus} from '../../protocols/httpclient/httpresponse';


export class Authenticate {
  constructor(
    private readonly url:string,
    private readonly httpPostClient:httpPostClient ) {}


  async auth(data: AccountModel): Promise<any> {
    const reshtppreq = await this.httpPostClient.post(this.url, data);
    switch (reshtppreq.status) {
      case httpstatus.badRequest: return new InvalidError();
      case httpstatus.ok: return reshtppreq.body;
      default: return new SomethingError();
    } ;
  }
}
