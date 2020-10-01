import faker from 'faker';


export const accountModel = {

  email: faker.internet.email(),
  password: faker.internet.password(),

};
const passwordFake = faker.internet.password();
export const accountRegisterModel = {
  name: faker.internet.userName(),
  email: faker.internet.email(),
  password: passwordFake,
  passwordConfirm: passwordFake,

};


