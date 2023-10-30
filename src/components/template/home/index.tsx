import clsx from "clsx";
import Button from "../../atoms/button";
import TitleText from "../../atoms/title-text";

type Props = {
  onclick(): void;
};

const Home = ({ onclick }: Props) => {
  return (
    <div
      className={clsx(
        "flex w-full",
        "sm:flex-col sm:items-center sm:gap-[81px] sm:px-[24px] sm:mt-[48px] sm:pb-[48px]",
        "md:flex-col md:items-center md:gap-[156px] md:px-[159px] md:mt-[106px] md:pb-[90px]",
        "lg:flex-row lg:items-center lg:justify-between lg:px-[165px] lg:mt-[250px] lg:pb-[130px]"
      )}
    >
      <TitleText
        className={clsx(
          "flex gap-6 max-w-[444px]",
          "sm:flex-col sm:text-center",
          "md:flex-col md:text-center",
          "lg:flex-col lg:text-left"
        )}
        subtitle={{
          label: "SO, YOU WANT TO TRAVEL TO",
          className:
            "lg:text-heading-5 md:text-heading-7 sm:text-heading-8 text-secondary",
        }}
        title={{
          label: "SPACE",
          className:
            "sm:text-heading-1/2 md:text-heading-1 lg:text-heading-1 text-white",
        }}
        text={{
          text: "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!",
          className: "text-paragraf",
        }}
      />
      <Button text="EXPLORE" onClick={() => onclick()} />
    </div>
  );
};
export default Home;
