import {AccountModel} from '@/domain/usecase/authInterface';
import {httresponse} from '@/data/protocols/httpclient/httpresponse';
export interface httpPostClient {
      post(url: string, data: AccountModel): Promise<httresponse>
}
