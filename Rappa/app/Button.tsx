import clsx from "clsx";

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  fullWidth: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  disabled?: boolean;
  danger?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  fullWidth,
  children,
  onClick,
  secondary,
  disabled,
  danger
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        'flex justify-center rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-offset-2 hover:cursor-pointer',
        disabled && "opacity-50 cursor-defautl",
        fullWidth && "mx-auto w-full",
        secondary ? 'text-gray-900' : 'text-white',
        danger && "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
        !secondary && !danger && "bg-[#191970] hover:bg-[#191940] focus-visible:outline-[#191940]" 

      )}
    >
      {children}
    </button>
  );
}

export default Button;