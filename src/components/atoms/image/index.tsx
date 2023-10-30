type Props = {
  className?: string;
  src: string;
};

const Image = ({ className, src }: Props) => {
  return <img className={className} src={src} />;
};
export default Image;
