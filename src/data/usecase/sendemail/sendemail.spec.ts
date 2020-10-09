import {AxiosHttpClient} from '../../../infra/http/axios.http-client/axios.http-client';
import {SendEmail} from './sendemail';

const makeSut = () => {
  const httpclient = new AxiosHttpClient;
  return {
    sut: new SendEmail(httpclient, 'localhost:2500/sendEmail'),
    httpclient,
  };
};


describe('sendemail', () => {
  test('should ensure ensure httpclient post is called with correct values', () => {
    const {httpclient, sut} = makeSut();
    const spy = jest.spyOn(httpclient, 'post').mockImplementationOnce((): any => {
      return '';
    });
    const email = '1lucas12345@gmail.com';

    sut.send(email);

    expect(spy).toHaveBeenCalledWith( 'localhost:2500/sendEmail', email);
  });
});
