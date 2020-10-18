import {SearchLocalFilter} from './searchFilter';


describe.only('search Locaations', () => {
  test.only('should return a locate', () => {
    const sut = new SearchLocalFilter;

    const array = [{
      'id': '1',
      'title': 'awwwsa',
      'companyName': 'teste',
      'tecnology': 'pya',
      'informações': 'Bu',
      'contato': 'l1@l.com',
      'preço': '30',
      'localizaçao': 'Rio de Janeiro, RJ',
      'typo': 'ct',
      'presencialOuRemoto': 'Preial',
    },,
      {
        'id': '2',
        'title': 'awwwsa',
        'companyName': 'teste',
        'tecnology': 'pya',
        'informações': 'Bu',
        'contato': 'l1@l.com',
        'preço': '30',
        'localizaçao': 'Rio de Janeiro, RJ',
        'typo': 'ct',
        'presencialOuRemoto': 'Preial',
      }, {
        'id': '3',
        'title': 'awwwsa',
        'companyName': 'teste',
        'tecnology': 'pya',
        'informações': 'Bu',
        'contato': 'l1@l.com',
        'preço': '30',
        'localizaçao': 'Rio de Janeiro, RJ',
        'typo': 'ct',
        'presencialOuRemoto': 'Preial',
      },

    ];

    sut.search(array, {searchingFor: 'Flutter'});
  });
});

