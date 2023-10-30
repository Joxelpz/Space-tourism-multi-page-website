import clsx from "clsx";

type Porps = {
  text: string;
  className?: string;
  textNav?: boolean;
};
const Text = ({ text, textNav, className }: Porps) => (
  <div
    className={clsx(
      className,
      textNav ? "text-nav" : "text-paragraf",
      "font-barlow text-white"
    )}
  >
    {text}
  </div>
);
export default Text;
