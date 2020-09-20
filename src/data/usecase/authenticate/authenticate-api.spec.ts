import {Authenticate} from './authenticate-api';
import {httpPostClient} from '../../protocols/httpclient/httpclient';
class HttpPostClient implements httpPostClient {
  async post(url: string ): Promise<any> {
    console.log(url);
    return new Promise((resolve) => resolve({
      token: 'any_token',
    }));
  }
}

const makeData = () => {
  return {
    email: 'lucas@gmail.com',
    password: '222',
  };
};


interface makeSutTypes {
   sut: Authenticate
   httpPostClient: HttpPostClient
}

const makeSut = (): makeSutTypes => {
  const url = 'any_url';
  const httppostclient = new HttpPostClient;
  return {
    sut: new Authenticate(url, httppostclient),
    httpPostClient: httppostclient,
  };
};

describe('Authenticate-api', () => {
  test('should  ensure httpClient is called with correct url', async () => {
    const {sut, httpPostClient} = makeSut();
    const spy = jest.spyOn(httpPostClient, 'post');
    const {email, password} = makeData();
    const data = {
      email,
      password,
    };
    await sut.auth(data);

    expect(spy).toBeCalledWith('any_url');
  });
});
