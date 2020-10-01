/* eslint-disable no-unused-vars */
export enum httpstatus {
    unauthorized = 403,
    ok = 200,
    badRequest = 400,
    interNalError = 500
}


export interface httresponse {
 status: httpstatus
 body?: any
 message?: string
}
