export interface ErrorsStateIfc {
    [key: string]: string
}

export interface ValuesStateIfc {
    [key: string]: string
}

export interface FormStateIfc {
    errorForm: string,
    errors: ErrorsStateIfc,
    values: ValuesStateIfc
}

export interface ValidationIfc {
    isEmail?: boolean,
    isSameValue?: string,
    minLength?: number,
    required?: boolean
}

export interface ValidationFieldsIfc {
    [key: string]: ValidationIfc
}

export interface HandleResetArgs {
    field?: string,
    fields?: string[]
}

export interface SubmitOptionsIfc {
    reset?: boolean,
    resetOptions?: HandleResetArgs
}
