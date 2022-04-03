type HasMinLengthArgs = {
    minLength: number,
    value: string
};

const hasMinLength = ({ minLength, value }: HasMinLengthArgs): string => {
    if(value.trim().length < minLength)
        return `El campo debe contener al menos ${ minLength } caracteres`;

    return '';
};

export default hasMinLength;
