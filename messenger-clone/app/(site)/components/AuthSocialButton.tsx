import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType,
  onClick: () => void;
}

const AuthSocialButton:React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        inline-flex
        w-full
        justify-center
        rounded-md
        bg-white
        px-4
        py-2
        text-gray-500
        shadow-sm
        ring-2
        ring-inset
        ring-sky-500
        hover:bg-gray-300
        focus:outline-offset-0
        hover:cursor-pointer
        
      "
    >
      <Icon/>

    </button>
  );
}

export default AuthSocialButton;
