# Custom Hook: useForm

Hook para proyecto en React, creado con TypeScript. Con las siguientes características:

* Escalable
* Manejo de onChange
* Manejo de onSumbit
* Reseteo de formulario: Total, parcial o por campo
* Validaciones

## Ejemplo
```
import { FormEvent } from 'react';
import { ValidationFieldsIfc, ValuesStateIfc } from '../interfaces';
import useForm from '../hooks/useForm';
import { InputForm } from '../components/Register';
import '../styles/styles.css';

const initialState: ValuesStateIfc = {
    email: '',
    name: '',
    password: '',
    password2: ''
};

const validationFields: ValidationFieldsIfc = {
    email: {
        isEmail: true,
        minLength: 5,
        required: true
    },
    name: {
        minLength: 2,
        required: true
    },
    password: {
        minLength: 6,
        required: true
    },
    password2: {
        isSameValue: 'password',
        minLength: 6,
        required: true
    }
};

const Register = () => {
    const { methodsForm, valuesForm } = useForm({
        initialState,
        validationFields,
        submitOptions: {
            reset: true,
            resetOptions: { fields: ['email', 'password2'] }
        }
    });

    const { errorForm, errors, values } = valuesForm;
    const { onChange, onReset, onSubmit } = methodsForm;
    
    const handleResetAll = () => onReset();
    const handleResetField = () => onReset({ field: 'email' });
    const handleResetSome = () => onReset({ fields: ['name', 'password'] });

    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        const submitedValues = onSubmit(ev);
        console.log(submitedValues);
    };

    return (
        <div>
            <h1>Register</h1>

            {
                (errorForm)
                    &&
                <p className="error-form">
                    {errorForm}
                </p>
            }

            <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <InputForm
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={onChange}
                    value={values.name}
                    error={errors.name || ''}
                />

                <InputForm
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={onChange}
                    value={values.email}
                    error={errors.email || ''}
                />

                <InputForm
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={onChange}
                    value={values.password}
                    error={errors.password || ''}
                />

                <InputForm
                    type="password"
                    name="password2"
                    placeholder="Repeat Password"
                    onChange={onChange}
                    value={values.password2}
                    error={errors.password2 || ''}
                />

                <button type="submit">
                    Create
                </button>

                <button
                    type="button"
                    onClick={handleResetField}
                >
                    Reset Field
                </button>

                <button
                    type="button"
                    onClick={handleResetSome}
                >
                    Reset Some
                </button>

                <button
                    type="button"
                    onClick={handleResetAll}
                >
                    Reset All
                </button>
            </form>
        </div>
    );
};

export default Register;
```
