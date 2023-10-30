import clsx from "clsx";

type Props = {
  className?: string;
};

const Separator = ({ className }: Props) => {
  return <div className={clsx("h-[1px] w-full bg-[#383B4B]", className)} />;
};
export default Separator;
