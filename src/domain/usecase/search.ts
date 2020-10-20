
export interface datasearch {
    token: string, 
    index: number,
    search: string,
    region: string
}


export interface search {
    search(data: datasearch ): Promise<any>
}
