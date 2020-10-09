import {sendEmailInterface} from '../../../domain/usecase/sendemail';
import {httresponse} from '../../protocols/httpclient/httpresponse';
import {httpPostClient} from '../../protocols/httpclient/httpclient';

export class SendEmail implements sendEmailInterface {
  constructor(private readonly httclient: httpPostClient,
    private readonly url : string,
  ) {}
  send(email: string) : Promise<httresponse> {
    const res = this.httclient.post(this.url, {email: email});

    return new Promise((resolve) => resolve(res));
  }
}
