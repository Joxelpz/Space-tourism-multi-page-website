type Props = {
  text: string;
  onClick?(): void;
};

const Button = ({ text, onClick }: Props) => {
  return (
    <button
      className="bg-white rounded-full sm:w-[150px] sm:h-[150px] md:w-[242px] md:h-[242px] lg:w-[274px] lg:h-[274px] font-bellefair sm:text-heading-7 md:text-heading-4 uppercase hover:shadow-button hover:transition-all hover:duration-800"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button;
