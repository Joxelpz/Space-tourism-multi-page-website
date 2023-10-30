import Text from "../text";
import Title from "../title";

type Props = {
  className?: string;
  subtitle: {
    label: string;
    className?: string;
  };
  title: {
    label: string;
    className: string;
  };
  text: {
    text: string;
    className?: string;
  };
};

const TitleText = ({ className, subtitle, title, text }: Props) => {
  return (
    <div className={className}>
      {subtitle && (
        <Text text={subtitle.label} className={subtitle.className} />
      )}
      <Title title={title.label} className={title.className} />
      <Text text={text.text} className={text.className} />
    </div>
  );
};
export default TitleText;
