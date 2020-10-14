
interface search {
  searchingFor: string, local?: string
}

interface pub {
  id: string
  title : string
  companyName: string
  tecnology: string
  informações: string
  contato: string
  preço: string
  localizaçao: string
  typo: string
  presencialOuRemoto: string

}

export interface searchfilterinterface {
  search(obj: pub[], searching: search ): any
}


export class SearchLocalFilter implements searchfilterinterface {
  search(obj: pub[], searching: search ): any {
    if (searching.local === '' && searching.searchingFor=== '') {
      return obj;
    }
    const resultItems:any[] = [];
    let newvalue: any= '';
    let newsearchingfor: any = '';
    if (searching.searchingFor) {
      console.log('executa');
      console.log(obj);
      obj.map((item) => {
        console.log('2', item, obj);
        const values:string[] = Object.values(item);

        for (let i = 0; i < values.length; i++) {
          newvalue = values[i].toLocaleLowerCase();
          newsearchingfor = searching.searchingFor.toLocaleLowerCase();
          if (newvalue.search(newsearchingfor) !== -1 ) {
            return resultItems.push(item);
          }
        }
      });
    }

    const resultwithLocal:any[] = [];
    if (searching.local && resultItems !== []) {
      console.log('a', searching.local, resultItems);
      resultItems.map((i) => {
        const newLocal = i.localizaçao.toLocaleLowerCase();
        const newSearchingLocal = searching.local?.toLocaleLowerCase();
        if (newLocal.search(newSearchingLocal) !== -1) {
          resultwithLocal.push(i);
        }
      });
    }
    if (searching.local && resultItems.length === 0) {
      obj.map((i) => {
        const newLocal = i.localizaçao.toLocaleLowerCase();
        const newSearchingLocal = searching.local?.toLocaleLowerCase() || '';

        console.log('reesult', newLocal.search(newSearchingLocal));
        if (newLocal.search(newSearchingLocal) !== -1) {
          resultwithLocal.push(i);
        }
      });
    }

    console.log('withlocal', resultItems);
    if (resultwithLocal.length > 0) {
      return resultwithLocal;
    } else {
      return resultItems;
    }
  }
}
