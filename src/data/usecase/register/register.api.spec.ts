import {accountRegisterModel} from '../../../domain/test/make-account';
import {Register} from './register.api';
import {AxiosHttpClient} from '../../../infra/http/axios.http-client/axios.http-client';
import {} from '../../../domain/protocols/';


class AxiosHttpClientStub {
  async post(url: string, data: any): Promise<any> {
    try {
      return new Promise((resolve) => resolve(
          {
            status: 200,
            body: 'any_body',
          },
      ));
    } catch (error) {
      return error;
    }
  }
}

const makeSut = () => {
  const httpClient = new AxiosHttpClient;
  const httpclientstub = new AxiosHttpClientStub;
  const url = 'http://localhost:2500/signup';
  return {
    sut: new Register(url, httpClient ),
    fakeAccountToRegister: accountRegisterModel,
    httpclientstub,
    url,
    httpClient,
  };
};


describe('Register api', () => {
  test('Should ensure post is called with correct values', async () => {
    const {fakeAccountToRegister, sut, url, httpClient} = makeSut();
    const spy = jest.spyOn(httpClient, 'post');
    await sut.reg(fakeAccountToRegister);
    expect(sut.data).toEqual( fakeAccountToRegister);
    expect(spy).toHaveBeenCalledWith(url, fakeAccountToRegister);
  });
});
