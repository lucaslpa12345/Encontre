import axios from 'axios';
import {accountModel} from '../../../domain/test/make-account';
import faker from 'faker';
import {AxiosHttpClient} from './axios.http-client';

jest.mock('axios');

const makeData = () => {
  return {
    accountModel,
    url: faker.internet.url(),
  };
};


describe('Axios client http', () => {
  test('should return  response from axios  with correct values ', async () => {
    const sut = new AxiosHttpClient;

    const {accountModel, url} = makeData();
    jest.spyOn(sut, 'post').mockReturnValue(new Promise((resolve) => resolve( {
      status: 200,
      body: accountModel,
    })));
    const res = await sut.post(url, accountModel);
    expect(res).toEqual( {
      status: 200,
      body: accountModel,
    });
  });
});
