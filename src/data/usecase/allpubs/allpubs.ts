import {allpubs} from '../../../domain/usecase/allpubs';
import {httpClient} from '../../protocols/httpclient/httpclient';


export class AllPubs implements allpubs {
  constructor(
         private readonly httpclient: httpClient,
         private readonly url: string,
  ) {}
  async getpubs(token: string, page: number): Promise<any> {
    const res = await this.httpclient.getAll(this.url, token, page);
    return res.body;
  }
}
