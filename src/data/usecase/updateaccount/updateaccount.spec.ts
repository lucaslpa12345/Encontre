import {UpdateAccount} from './updateaccount';
import {AxiosHttpClient} from '../../../infra/http/axios.http-client/axios.http-client';

const makeSut = () => {
  const httpclient = new AxiosHttpClient;
  const linktest = 'http://localhost:2500/editPassword?token=';
  return {
    sut: new UpdateAccount(httpclient, linktest ),
    httpclient,
    linktest,
  };
};


describe('updateaccount', () => {
  test('should ensure put from httpclient is called with correct values ', () => {
    const {httpclient, sut, linktest} = makeSut();
    const spy = jest.spyOn(httpclient, 'put');
    const password = '4444444444';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwMzAiLCJlbWFpbCI6IjFsdWNhc2xwYTEyMzQ1QGdtYWlsLmNvbSIsImlhdCI6MTYwMjEyNzQ0OX0.o36QYSF2wJOizmWlwjBvWMdGZ8-ej614_E3ksxSvyas';
    sut.update(password, token);
    expect(spy).toHaveBeenCalledWith(linktest, password);
  });

  test('should return 500 status if not success', async () => {
    const {httpclient, sut} = makeSut();
    jest.spyOn(httpclient, 'put').mockImplementation(():any => {
      return {
        status: 500,
        message: 'error',
      };
    });
    const password = '4444444444';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwMzAiLCJlbWFpbCI6IjFsdWNhc2xwYTEyMzQ1QGdtYWlsLmNvbSIsImlhdCI6MTYwMjEyNzQ0OX0.o36QYSF2wJOizmWlwjBvWMdGZ8-ej614_E3ksxSvyas';

    const res = await sut.update(password, token);
    expect(res).toEqual({
      status: 500,
      message: 'Erro não identificado',
    });
  });
  test('should return 200 status if  success', async () => {
    const {httpclient, sut} = makeSut();
    jest.spyOn(httpclient, 'put').mockImplementation(():any => {
      return {
        status: 200,
        message: 'sucesso',
      };
    });
    const password = '4444444444';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwMzAiLCJlbWFpbCI6IjFsdWNhc2xwYTEyMzQ1QGdtYWlsLmNvbSIsImlhdCI6MTYwMjEyNzQ0OX0.o36QYSF2wJOizmWlwjBvWMdGZ8-ej614_E3ksxSvyas';

    const res = await sut.update(password, token);
    expect(res).toEqual({
      status: 200,
      message: 'Senha modificada com sucesso',
    });
  });
});
