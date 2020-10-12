import localidades from './localidades';


export interface searchlocationsinterface {
     search(name: string): any
}


export class SearchLocations implements searchlocationsinterface {
  search(name: string): any {
    if (name.length === 0) {
      return [];
    }
    let newName = name.charAt(0).toUpperCase() + name.slice(1);
    const array = newName.split(' ');
    if (array.length > 0) {
      for (let i = 1; i < array.length; i++) {
        const newSWord = array[i] .charAt(0).toUpperCase() + array[i].slice(1);
        newName = array[i-1] + ' ' + newSWord;
      }
    }
    const Locals:any = {
      locate: [],
    };
    localidades.estados.forEach((i)=> {
      i.cidades.map((cidade) => {
        if (cidade.search(newName) !== -1 ) {
          if (Locals.locate === []) {
            return Locals.locate = [`${cidade},${i.sigla}`];
          } else {
            return Locals.locate = [...Locals.locate, `${cidade}, ${i.sigla}`];
          }
        }
      });
      return;
    });
    if (Locals.locate === [] || Locals.locate.length > 10) {
      return [];
    } else {
      return Locals.locate;
    }
  }
}
