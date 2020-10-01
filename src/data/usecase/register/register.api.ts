import {RegisterTypes, RegisterAccountModel} from '../../../domain/usecase/registerInterface';
import {httpPostClient, httresponse, httpstatus} from '../../protocols/';
import {} from '../../../domain/protocols/';


export class Register implements RegisterTypes {
  constructor(
    private readonly url:string,
    private readonly httpClient: httpPostClient ) {}
    public data:any
    async reg(data: RegisterAccountModel ): Promise<httresponse> {
      this.httpClient.post(this.url, data);
      this.data = data;
      return {
        status: 200,
        body: 'cuckeira',
      };
    }
}
