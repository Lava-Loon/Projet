import clsx from "clsx";


interface ActionButtonProps {
  icon: React.ElementType;
  type: 'button' | 'submit';
  disabled?: boolean;
  onClick: () => void;
  alone: boolean;
  visible?: boolean;

}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon: Icon,
  type,
  disabled,
  onClick,
  alone,
  visible
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "w-full justify-center rounded-md bg-transparent p-4 text-white cursor-pointer",
        alone && "hover:bg-gray-400",
        visible ? "flex" : "hidden group-hover:flex"
      )
      }



    >
      <Icon size={18} />
    </button>
  )
};

export default ActionButton;