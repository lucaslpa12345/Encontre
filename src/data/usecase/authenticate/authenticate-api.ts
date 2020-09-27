import {AccountModel, httpPostClient, httpstatus, SomethingError, InvalidError} from './';


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
