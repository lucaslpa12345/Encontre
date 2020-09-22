import { createContext } from 'react'
interface State {
    EmailInvalid: Boolean
     SenhaInvalid: boolean 
    }

export default createContext({} as  State)