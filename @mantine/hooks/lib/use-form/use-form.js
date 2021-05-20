import { useState } from 'react';
export function useForm({ initialValues, validationRules = {}, }) {
    const initialErrors = Object.keys(initialValues).reduce((acc, field) => {
        acc[field] = false;
        return acc;
    }, {});
    const [errors, setErrors] = useState(initialErrors);
    const [values, setValues] = useState(initialValues);
    const resetErrors = () => setErrors(initialErrors);
    const reset = () => {
        setValues(initialValues);
        resetErrors();
    };
    const validate = () => {
        let isValid = true;
        const validationErrors = Object.keys(values).reduce((acc, field) => {
            if (validationRules &&
                typeof validationRules[field] === 'function' &&
                !validationRules[field](values[field])) {
                acc[field] = true;
                isValid = false;
            }
            else {
                acc[field] = false;
            }
            return acc;
        }, {});
        setErrors(validationErrors);
        return isValid;
    };
    const validateField = (field) => setErrors((currentErrors) => (Object.assign(Object.assign({}, currentErrors), { [field]: typeof validationRules[field] === 'function'
            ? !validationRules[field](values[field])
            : false })));
    const setFieldError = (field, error) => setErrors((currentErrors) => (Object.assign(Object.assign({}, currentErrors), { [field]: error })));
    const setFieldValue = (field, value) => {
        setValues((currentValues) => (Object.assign(Object.assign({}, currentValues), { [field]: value })));
        setFieldError(field, false);
    };
    const onSubmit = (handleSubmit) => (event) => {
        event && event.preventDefault();
        validate() && handleSubmit(values);
    };
    return {
        values,
        errors,
        validate,
        reset,
        setErrors,
        setValues,
        setFieldValue,
        setFieldError,
        validateField,
        resetErrors,
        onSubmit,
    };
}
