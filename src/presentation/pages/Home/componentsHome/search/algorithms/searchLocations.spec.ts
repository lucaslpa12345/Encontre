import {SearchLocations} from './searchLotions';

describe.only('search Locaations', () => {
  test.only('should return a locate', () => {
    const sut = new SearchLocations;


    const res = sut.search('brasília');
    console.log('doidera', res);
  });
});

