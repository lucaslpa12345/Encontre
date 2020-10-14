
import {createContext} from 'react';

interface statecontext {
   state: {
        title: string,
        companyName: string,
        tecnology: string,
        informações: string,
        contato: string,
        preço: string,
        localizaçao: string,
        typo: string,
        presencialOuRemoto: string
   }
    setState: any
    sendpub: any
}


export const context = createContext({} as statecontext );
