import {AccountModel, httpClient, httpstatus, somethingWrong, invalidData, httpresponse} from './';


export class Authenticate {
  constructor(
    private readonly url:string,
    private readonly httpPostClient: httpClient ) {}

  async auth(data: AccountModel): Promise<httpresponse> {
    const reshtppreq = await this.httpPostClient.post(this.url, data);

    switch (reshtppreq.status) {
      case httpstatus.badRequest: return invalidData();
      case httpstatus.ok: return reshtppreq.body;
      default: return somethingWrong();
    } ;
  }
}
