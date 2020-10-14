import {createContext} from 'react';
interface State {

         state: {
            EmailIsValid?: Boolean
            SenhaIsValid?: boolean
              isLoad?: boolean
              error?: string
              Email?: string
              Senha?: string
              HiddenSenha?: string
         },
    setState: any,
    }

export default createContext({} as State);
