import { ValidationIfc } from '../../interfaces';
import { hasMinLength, isCompleted, isSameValue, isValidEmail } from '../../utils';

export type ValidateFieldArgs = {
    name: string,
    value1: string,
    validation: ValidationIfc,
    value2?: string
};

export interface ValidateFieldIfc {
    [key: string]: string
}

const validateField = ({ name, validation, value1, value2 }: ValidateFieldArgs): ValidateFieldIfc => {
    let errorMessage = '';

    if(validation.required) {
        errorMessage = isCompleted(value1);

        if(errorMessage)
            return { [name]: errorMessage };
    }

    if(validation.minLength) {
        errorMessage = hasMinLength({
            minLength: validation.minLength,
            value: value1
        });

        if(errorMessage)
            return { [name]: errorMessage };
    }

    if(validation.isEmail) {
        errorMessage = isValidEmail(value1);

        if(errorMessage)
            return { [name]: errorMessage };
    }

    if(validation.isSameValue && value2) {
        errorMessage = isSameValue({
            name,
            value: value1,
            otherName: validation.isSameValue,
            otherValue: value2
        });

        if(errorMessage)
            return { [name]: errorMessage };
    }

    return { [name]: errorMessage };
};

export default validateField;
