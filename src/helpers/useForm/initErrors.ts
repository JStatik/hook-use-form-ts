import { ErrorsStateIfc, ValidationFieldsIfc } from '../../interfaces';

const initErrors = (validationFields?: ValidationFieldsIfc): ErrorsStateIfc => {
    const errorKeys: string[] = Object.keys(validationFields || {});

    return {
        ...errorKeys.reduce((result, key) => ({
            ...result,
            [key]: ''
        }), {})
    };
};

export default initErrors;
