export interface Validator {
    isValid(value: string, min?: number): boolean
}
