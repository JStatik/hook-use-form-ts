import { ChangeEvent, FormEvent, useCallback, useRef, useState } from 'react';
import {
    HandleResetArgs,
    ErrorsStateIfc,
    FormStateIfc,
    SubmitOptionsIfc,
    ValidationIfc,
    ValidationFieldsIfc,
    ValuesStateIfc
} from '../interfaces';
import { initErrors, resetPartState, validateField } from '../helpers';

type UseFormProps = {
    initialState: ValuesStateIfc,
    submitOptions?: SubmitOptionsIfc,
    validationFields?: ValidationFieldsIfc
};

interface UseFormIfc {
    methodsForm: {
        onChange: (ev: ChangeEvent<HTMLInputElement>) => void,
        onReset: (args?: HandleResetArgs) => void,
        onSubmit: (ev: FormEvent<HTMLFormElement>) => ValuesStateIfc
    },
    valuesForm: {
        errorForm: string,
        errors: ErrorsStateIfc,
        values: ValuesStateIfc
    }
}

const useForm = ({ initialState, submitOptions, validationFields }: UseFormProps): UseFormIfc => {
    const _validationFields = useRef<ValidationFieldsIfc>(validationFields || null);

    const [formState, setFormState] = useState<FormStateIfc>({
        errorForm: '',
        values: initialState,
        errors: initErrors(validationFields)
    });

    const handleChange = useCallback((ev: ChangeEvent<HTMLInputElement>): void => {
        const { name, value }: EventTarget & HTMLInputElement = ev.target;

        if(!_validationFields.current || !_validationFields.current[name]) {
            setFormState(formState => ({
                ...formState,
                values: {
                    ...formState.values,
                    [name]: value
                }
            }));
        } else {
            const validationField: ValidationIfc = _validationFields.current[name];
            const nameOtherValue: string = validationField.isSameValue || '';

            setFormState(formState => ({
                ...formState,
                errorForm: '',
                errors: {
                    ...formState.errors,
                    ...validateField({
                        name,
                        value1: value,
                        validation: validationField,
                        value2: formState.values[nameOtherValue]
                    })
                },
                values: {
                    ...formState.values,
                    [name]: value
                }
            }));
        }
    }, []);

    const handleReset = (args?: HandleResetArgs): void => {
        setFormState(formState => {
            const resetErrors: ErrorsStateIfc = resetPartState({
                field: args?.field,
                fields: args?.fields,
                state: formState.errors
            });

            const resetValues: ValuesStateIfc = resetPartState({
                initialState,
                field: args?.field,
                fields: args?.fields,
                state: formState.values
            });

            return {
                ...formState,
                errorForm: '',
                errors: { ...resetErrors },
                values: { ...resetValues }
            };
        });
    };

    const handleSubmit = (ev: FormEvent<HTMLFormElement>): ValuesStateIfc => {
        ev.preventDefault();

        if(!_validationFields.current) {
            if(submitOptions && submitOptions.reset) {
                (!submitOptions.resetOptions)
                    ? handleReset()
                    : handleReset(submitOptions.resetOptions);
            }

            return formState.values;
        } else {
            let newErrors: ErrorsStateIfc = {};
            const valueKeys: string[] = Object.keys(formState.values);

            valueKeys.forEach(key => {
                if(_validationFields.current && _validationFields.current[key]) {
                    const validationField: ValidationIfc = _validationFields.current[key];
                    const nameOtherValue: string = validationField.isSameValue || '';

                    newErrors = {
                        ...newErrors,
                        ...validateField({
                            name: key,
                            validation: validationField,
                            value1: formState.values[key],
                            value2: formState.values[nameOtherValue]
                        })
                    };
                }
            });

            const existErrors = !!Object.values(newErrors).find(error => error.length > 0);

            if(existErrors) {
                setFormState(formState => ({
                    ...formState,
                    errorForm: 'Complete correctamente los campos del formulario',
                    errors: {
                        ...formState.errors,
                        ...newErrors
                    }
                }));

                return {};
            } else {
                if(submitOptions && submitOptions.reset) {
                    (!submitOptions.resetOptions)
                        ? handleReset()
                        : handleReset(submitOptions.resetOptions);
                }

                return formState.values;
            }
        }
    };

    return {
        methodsForm: {
            onChange: handleChange,
            onReset: handleReset,
            onSubmit: handleSubmit
        },
        valuesForm: {
            errorForm: formState.errorForm,
            errors: formState.errors,
            values: formState.values
        }
    };
};

export default useForm;
