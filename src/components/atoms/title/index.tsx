import clsx from "clsx";
type Props = {
  barlow?: boolean;
  title: string;
  className: string;
};
const Title = ({ barlow, title, className }: Props) => {
  return (
    <div className={clsx(className, barlow ? "font-barlow" : "font-bellefair")}>
      {title}
    </div>
  );
};
export default Title;
