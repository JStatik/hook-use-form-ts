export type IsSameValueArgs = {
    name: string,
    otherName: string,
    otherValue: string,
    value: string
};

const isSameValue = ({ name, otherName, otherValue, value }: IsSameValueArgs): string => {
    if(otherValue.trim().length > 0 && otherValue !== value)
        return `El campo ${ name } no coincide con el campo ${ otherName }`;

    return '';
};

export default isSameValue;
