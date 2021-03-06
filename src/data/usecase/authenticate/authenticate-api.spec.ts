import {token, accountModel, Authenticate, invalidData, somethingWrong, httpstatus} from './index';
import {AxiosHttpClient} from '../../../infra/http/axios.http-client/axios.http-client';

const makeData = () => {
  return {
    accountModel,
    token: token,
  };
};


interface makeSutTypes {
   sut: Authenticate
   httpPostClient: AxiosHttpClient
}

const makeSut = (): makeSutTypes => {
  const url = 'any_url';
  const httppostclient = new AxiosHttpClient;
  return {
    sut: new Authenticate(url, httppostclient),
    httpPostClient: httppostclient,
  };
};

describe('Authenticate-api', () => {
  test('should  ensure httpClient is called with correct url', async () => {
    const {sut, httpPostClient} = makeSut();
    const spy = jest.spyOn(httpPostClient, 'post');
    const {accountModel} = makeData();

    await sut.auth(accountModel);

    expect(spy).toBeCalledWith('any_url', {'email': accountModel.email, 'password': accountModel.password});
  });

  test('should  ensure httpClient is called with correct Account', async () => {
    const {sut, httpPostClient} = makeSut();
    const spy = jest.spyOn(httpPostClient, 'post');
    const {accountModel} = makeData();

    await sut.auth(accountModel);

    expect(spy).toBeCalledWith('any_url', {'email': accountModel.email, 'password': accountModel.password});
  });

  test('if post return 200 should auth return OK', async () => {
    const {sut} = makeSut();
    const {accountModel, token} = makeData();


    const res = await sut.auth(accountModel);

    expect(res).toEqual({token});
  });


  test('if post return 400 should auth return Invalid', async () => {
    const {sut, httpPostClient} = makeSut();
    jest.spyOn(httpPostClient, 'post').mockReturnValueOnce(
        new Promise( (resolve) => resolve({
          status: httpstatus.badRequest,
        })),
    );
    const {email, password} = makeData().accountModel;
    const data = {
      email,
      password,
    };
    const res = await sut.auth(data);
    expect(res).toEqual(invalidData());
  });

  test('if post return 400 should auth return Invalid', async () => {
    const {sut, httpPostClient} = makeSut();
    jest.spyOn(httpPostClient, 'post').mockReturnValueOnce(
        new Promise( (resolve) => resolve({
          status: httpstatus.interNalError,
        })),
    );
    const {email, password} = makeData().accountModel;
    const data = {
      email,
      password,
    };
    const res = await sut.auth(data);
    expect(res).toEqual(somethingWrong());
  });
});
