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
  test('should call axios with correct values ', () => {
    const sut = new AxiosHttpClient;
    const {accountModel, url} = makeData();


    const res = sut.post(url, accountModel);

    expect(axios.post).toHaveBeenCalledWith(url, accountModel);
  });
});
