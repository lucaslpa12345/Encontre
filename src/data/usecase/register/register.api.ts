import {RegisterTypes, RegisterAccountModel} from '../../../domain/usecase/registerInterface';
import {httpClient, httpresponse, httpstatus} from '../../protocols/';
import {somethingWrong, invalidData} from '../../../domain/protocols/';


export class Register implements RegisterTypes {
  constructor(
    private readonly url:string,
    private readonly httpClient: httpClient ) {}
    public data:any
    async reg(data: RegisterAccountModel ): Promise<httpresponse> {
      const res = await this.httpClient.post(this.url, data);
      this.data = data;
      switch (res.status) {
        case httpstatus.ok: return res.body;
        case httpstatus.badRequest: return invalidData();
        default: return somethingWrong();
      }
    }
}
