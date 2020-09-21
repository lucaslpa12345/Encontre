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
  test('should call axios with correct values ', async () => {
    const sut = new AxiosHttpClient;
    const {accountModel, url} = makeData();
    await sut.post(url, accountModel);
    expect(axios.post).toHaveBeenCalledWith(url, accountModel);
  });

  test('should return  response from axios  with correct values ', async () => {
    const sut = new AxiosHttpClient;
    const {accountModel, url} = makeData();
    jest.spyOn(axios, 'post').mockImplementationOnce((): any => {
      return {
        status: 200,
        data: accountModel,
      };
    });


    const res = await sut.post(url, accountModel);
    expect(res).toEqual( {
      status: 200,
      data: accountModel,
    });
  });
});
