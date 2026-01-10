'use client';

import clsx from 'clsx';
import {
    FieldErrors,
    UseFormRegister
} from 'react-hook-form';

type AuthFormValues = {
    name: string;
    email: string;
    password: string;
};

interface InputProps {
    label: string;
    id: keyof AuthFormValues;
    type?: string;
    required?: boolean;
    register: UseFormRegister<AuthFormValues>;
    errors: FieldErrors<AuthFormValues>;
    disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
    register,
    label,
    id,
    type = 'text',
    required,
    errors,
    disabled
}) => {
    const hasError = Boolean(errors[id]);

    return (
        <div>
            <label
                htmlFor={id} 
                className="relative block top-8.5 left-2 font-medium text-gray-500 text-base transition-all duration-200 cursor-text peer-placeholder-shown:top-2  ">
                {label}
            </label>

            <input
                id={id}
                type={type}
                disabled={disabled}
                {...register(id, { required })}
                className={clsx(
                    'peer block w-full rounded-md pt-2 px-3 pb-1 text-gray-900 shadow-xl ',
                    hasError ? 'ring-red-500' : 'ring-gray-300'
                )}
            />

            {hasError && (
                <p className="mt-1 text-sm text-red-600">
                    Champ requis
                </p>
            )}
        </div>
    );
};

export default Input;
