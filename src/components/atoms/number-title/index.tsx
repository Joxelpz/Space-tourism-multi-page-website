import Text from "../text";

type Props = {
  className?: string;
  number: string;
  title: string;
};

const NumberTitle = ({ className, number, title }: Props) => {
  return (
    <div className={className}>
      {number && (
        <Text
          className="lg:text-heading-5 md:text-heading-7 sm:text-heading-8 text-white-opacity"
          text={number}
        />
      )}
      <Text
        className="uppercase lg:text-heading-5 md:text-heading-7 sm:text-heading-8 text-secondary"
        text={title}
      />
    </div>
  );
};
export default NumberTitle;
