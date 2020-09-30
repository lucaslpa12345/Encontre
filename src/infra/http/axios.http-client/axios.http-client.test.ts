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


describe.only('Axios client http ', () => {
  test.only('ensure axios client post register a account', async () => {
    const sut = new AxiosHttpClient;
    const {accountModel, url} = makeData();
    jest.spyOn(axios, 'post');
    const res = await sut.post(url, accountModel);
    console.log(res);
  });
});
