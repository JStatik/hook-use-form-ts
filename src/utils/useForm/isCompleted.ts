const isCompleted = (value: string): string => {
    if(value.trim().length <= 0)
        return 'El campo es obligatorio';

    return '';
};

export default isCompleted;
