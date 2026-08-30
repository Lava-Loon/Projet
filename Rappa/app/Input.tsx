import clsx from "clsx";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

type AuthFormValues = {
  username?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

interface InputProps {
  label: string;
  id: keyof AuthFormValues;
  type?: string;
  required?: boolean;
  register: UseFormRegister<AuthFormValues>;
  errors: FieldErrors<AuthFormValues>;
  disabled: boolean; 

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
  return (
    <div
      className="
        w-full
        relative
      "
    >
      <input 
        id={id}
        placeholder=""
        type={type}
        disabled={disabled}
        className={clsx(
          'peer w-full rounded-md pt-5 px-3 pb-2 text-gray-900 shadow-xl focus:outline-none'

        )}
      />
      <label
        htmlFor={id}
        className={clsx(
          'absolute left-3 text-gray-500 font-medium text-base transition-all duration-200 hover: cursor-text',
          'peer-placeholder-shown:top-5 peer-placeholder-shown::text-gray-400 peer-placeholder-shown:text-base'
        )}
      >
        {label}
      </label>
      
    </div>
  );
}

export default Input;