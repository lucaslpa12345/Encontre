import {sendEmailInterface} from '../../../domain/usecase/sendemail';
import {httpresponse} from '../../protocols/httpclient/httpresponse';
import {httpClient} from '../../protocols/httpclient/httpclient';

export class SendEmail implements sendEmailInterface {
  constructor(private readonly httclient: httpClient,
    private readonly url : string,
  ) {}
  send(email: string) : Promise<httpresponse> {
    const res = this.httclient.post(this.url, {email: email});

    return new Promise((resolve) => resolve(res));
  }
}
