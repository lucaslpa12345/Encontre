import {allpubs} from '../../../domain/usecase/allpubs';
import {httpClient} from '../../protocols/httpclient/httpclient';


export class AllPubs implements allpubs {
  constructor(
         private readonly httpclient: httpClient,
         private readonly url: string,
  ) {}
  async getpubs(): Promise<any> {
    const res = await this.httpclient.getAll(this.url);
    console.log('d', res);
    return res.body;
  }
}
