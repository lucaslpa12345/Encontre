import {sendEmailInterface} from '../../../domain/usecase/sendemail';
import {httpresponse} from '../../protocols/httpclient/httpresponse';
import {httpClient} from '../../protocols/httpclient/httpclient';

export class SendEmail implements sendEmailInterface {
  constructor(private readonly httclient: httpClient,
    private readonly url : string,
  ) {}
  async send(email: string) : Promise<httpresponse> {
    const res = await this.httclient.post(this.url, {email: email});

    if (!res.status) {
      return new Promise((resolve) => resolve({
        status: 500,
        message: 'Erro no servidor.',
      }));
    }
    return new Promise((resolve) => resolve(res));
  }
}
