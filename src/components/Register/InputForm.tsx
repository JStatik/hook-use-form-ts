import React, { ChangeEvent, Fragment } from 'react';

type InputFormProps = {
    name: string,
    placeholder: string,
    type: string,
    value: string,
    error?: string,
    onChange: (ev: ChangeEvent<HTMLInputElement>) => void
};

const InputForm = React.memo(({ error, name, placeholder, type, value, onChange }: InputFormProps) => {
    return (
        <Fragment>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`${ (error) ? 'has-error' : '' }`}
            />

            {
                (error)
                    &&
                <span>
                    {error}
                </span>
            }
        </Fragment>
    );
});

InputForm.displayName = 'InputForm';

export default InputForm;
