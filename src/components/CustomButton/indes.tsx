import { CustomButtonProps} from '../../types/props';

function CustomButton({ type, text, icon }: CustomButtonProps){
  return(
    <button
      className={`
        max-w-[416px] w-full py-3 px-6 ${type == 'primary' ? 'bg-[#333333]' : 'bg-white'}
        rounded-[48px]
      `}
    >
      <span
        className={`
          ${type == 'primary' ? 'text-white' : 'text-[#D73035]'}
          font-bold text-base flex justify-center gap-2
        `}
      >
        <span>{icon}</span><span>{text}</span>
      </span>
    </button>
  );
}


export default CustomButton;
