import React from 'react';
export declare type ValidationRule<T> = {
    readonly [P in keyof T]?: (value: T[P]) => boolean;
};
export interface UseForm<T> {
    validationRules?: ValidationRule<T>;
    initialValues: T;
}
export declare function useForm<T extends {
    [key: string]: any;
}>({ initialValues, validationRules, }: UseForm<T>): {
    values: T;
    errors: { [P in keyof T]: boolean; };
    validate: () => boolean;
    reset: () => void;
    setErrors: React.Dispatch<React.SetStateAction<{ [P in keyof T]: boolean; }>>;
    setValues: React.Dispatch<React.SetStateAction<T>>;
    setFieldValue: <K extends keyof T, U extends T[K]>(field: K, value: U) => void;
    setFieldError: (field: keyof T, error: boolean) => void;
    validateField: (field: keyof T) => void;
    resetErrors: () => void;
    onSubmit: (handleSubmit: (values: T) => any) => (event?: React.FormEvent) => void;
};
//# sourceMappingURL=use-form.d.ts.map