import {createContext} from 'react';
interface State {
    EmailInvalid: Boolean
     SenhaInvalid: boolean
     isLoad: boolean
     error: boolean
    }

export default createContext({} as State);
