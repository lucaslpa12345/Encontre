import {SearchLocations} from './searchLotions';

describe.only('search Locaations', () => {
  test.only('should return a locate', () => {
    const sut = new SearchLocations;


    sut.search('brasília');
  });
});

