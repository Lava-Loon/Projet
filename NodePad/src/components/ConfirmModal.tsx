interface ConfirmModalProps {
  text: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal = ({
  text,
  onConfirm,
  onCancel
}: ConfirmModalProps) => {

 
  return(
    <div
      className="
        fixed
        inset-0
        bg-black/50
        flex
        items-center
        justify-center
      
      "
    >
      <div
        className="
          bg-gray-800
          rounded-lg
          p-8
          
        "
      >
        <p>
          {text}
        </p>
        <div
          className="
            flex
            justify-center
            gap-4

            
            
          "
        >
          <button
            onClick={onCancel}
          >
            No
          </button>
          <button
            onClick={onConfirm}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  )
};

export default ConfirmModal;