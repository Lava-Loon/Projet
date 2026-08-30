'use client';

import clsx from 'clsx';
import { useState } from 'react';
import {
  FieldErrors,
  UseFormRegister
} from 'react-hook-form';
import { HiEye, HiEyeOff } from 'react-icons/hi';

type AuthFormValues = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
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
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;

  return (
    <div
      className="
            w-full
            relative
          
          "
    >
      <input

        id={id}
        placeholder=" " // obligatoire pour peer-placeholder-shown
        aria-invalid={hasError}
        type={inputType}
        disabled={disabled}
        {...register(id, { required: required ? 'Ce champ est requis' : false })}
        className={clsx(
          'peer flex justify-center w-full rounded-lg px-3 py-1.5 text-sky-700 ring-2 bg-gray-300 shadow-lg',
          hasError ? 'ring-red-500' : 'ring-gray-300',
          'focus:outline-none'
        )}
      />

      <label
        htmlFor={id}
        className={clsx(
          'bg-transparent absolute left-3 text-sky-700 font-medium text-base transition-all duration-200 hover:cursor-text px-1',
          'peer-not-placeholder-shown:top-[-9px] peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-sky-700 peer-not-placeholder-shown:bg-[#ECEFF1]',
          'peer-placeholder-shown:top-2 peer-placeholder-shown:text-sky-500 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent',
          'peer-focus:top-[-9px] peer-focus:text-sm peer-focus:text-sky-500 peer-focus:bg-[#ECEFF1]'
        )}
      >
        {label}
      </label>

      {type === 'password' && (
        <button
          type="button"
          disabled={disabled}
          onClick={() => setShowPassword(!showPassword)}
          className='absolute right-3 top-2 text-sky-700 hover:text-sky-500 transition cursor-pointer'
        >
          {showPassword ? <HiEye size={22} /> : <HiEyeOff size={22} />}

        </button>
      )}

      {hasError && (
        <p className="mt-1 text-sm text-red-600">{errors[id]?.message as string}</p>
      )}
    </div>

  );
};

export default Input;
