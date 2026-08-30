import clsx from 'clsx';

interface ButtonProps {
  type?: 'button' | 'submit';
  disabled?: boolean;
  children: React.ReactNode;
  onClick: () => void;
  isActive?: boolean;

}

const Button: React.FC<ButtonProps> = ({
  type,
  disabled,
  children,
  onClick,
  isActive,
}) => {
  return(
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx('flex w-full px-3 py-2 rounded-lg text-lg cursor-pointer',
      isActive 
        ? 'bg-gray-400'
        : 'bg-transparent hover:bg-gray-400'
      )}
    >
      {children}
    </button>
  )
};

export default Button;