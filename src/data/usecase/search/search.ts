import {httpClient} from '../../protocols/httpclient/httpclient';
import {datasearch, search} from '../../../domain/usecase/search';

export class Search implements search {
  constructor(
         private readonly httpclient : httpClient,
         private readonly url: string,
  ) {}
  async search(data: datasearch ): Promise<any> {
    const res = await this.httpclient.get(this.url, data);
    if (res.status !== 200) {
      return {
        status: 500,
        body: 'Erro',
      };
    }
    return res;
  }
}
