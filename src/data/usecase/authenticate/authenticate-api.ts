import {AccountModel, httpPostClient, httpstatus, somethingWrong, invalidData, httresponse} from './';


export class Authenticate {
  constructor(
    private readonly url:string,
    private readonly httpPostClient:httpPostClient ) {}


  async auth(data: AccountModel): Promise<httresponse> {
    const reshtppreq = await this.httpPostClient.post(this.url, data);

    switch (reshtppreq.status) {
      case httpstatus.badRequest: return invalidData();
      case httpstatus.ok: return reshtppreq.body;
      default: return somethingWrong();
    } ;
  }
}
