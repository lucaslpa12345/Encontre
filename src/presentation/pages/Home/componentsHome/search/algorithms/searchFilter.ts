
interface search {
  searchingFor: string, local?: string
}

interface pub {
       id: string,
      title: string,
      proprietario: string,
      info: string,
      email: string,
      skill: string,
      tipo: string,
      PresencialOuRemoto: string,
      preçoOuCusto: string,
      local: string,

}

export interface searchfilterinterface {
  search(obj: pub[], searching: search ): any
}


export class SearchLocalFilter implements searchfilterinterface {
  search(obj: pub[], searching: search ): any {
    const resultItems:any[] = [];
    let newvalue: any= '';
    let newsearchingfor: any = '';
    obj.map((item) => {
      const values:string[] = Object.values(item);
      for (let i = 0; i < values.length; i++) {
        newvalue = values[i].toLocaleLowerCase();
        newsearchingfor = searching.searchingFor.toLocaleLowerCase();
        if (newvalue.search(newsearchingfor) !== -1 ) {
          return resultItems.push(item);
        }
      }
    });
    const resultwithLocal:any[] = [];
    if (searching.local) {
      resultItems.map((i) => {
        const newLocal = i.local.toLocaleLowerCase();
        const newSearchingLocal = searching.local?.toLocaleLowerCase();
        if (newLocal.search(newSearchingLocal) !== -1) {
          resultwithLocal.push(i);
        }
      });
    }

    if (resultwithLocal.length > 0) {
      return resultwithLocal;
    } else {
      return resultItems;
    }
  }
}