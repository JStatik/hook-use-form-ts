import { HandleResetArgs, ErrorsStateIfc, ValuesStateIfc } from '../../interfaces';

interface ResetPartStateArgs extends HandleResetArgs {
    state: ErrorsStateIfc | ValuesStateIfc,
    initialState?: ErrorsStateIfc | ValuesStateIfc
}

const resetPartState = ({
    field,
    fields,
    initialState,
    state
}: ResetPartStateArgs): ErrorsStateIfc | ValuesStateIfc => {
    if(field) {
        const existField: boolean = Object.prototype.hasOwnProperty.call(state, field);

        if(existField) {
            return {
                ...state,
                [field]: (initialState) ? initialState[field] : ''
            };
        }

        return { ...state };
    }

    if(fields && fields.length > 0) {
        return fields.reduce((result, field) => {
            const existField: boolean = Object.prototype.hasOwnProperty.call(state, field);

            if(existField) {
                return {
                    ...result,
                    [field]: (initialState) ? initialState[field] : ''
                };
            }

            return { ...result };
        }, state);
    }

    return Object.keys(state).reduce((result, field) => ({
        ...result,
        [field]: (initialState) ? initialState[field] : ''
    }), state);
};

export default resetPartState;
