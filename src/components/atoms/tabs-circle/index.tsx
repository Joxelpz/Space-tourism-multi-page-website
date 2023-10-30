import clsx from "clsx";

type Props = {
  list?: number[];
  className?: string;
  tabAct?: number;
  onClick?(i: number): void;
};

const TabsCircle = ({ list, className, tabAct, onClick }: Props) => {
  return (
    <ul className={clsx(className, "flex sm:gap-4 lg:gap-6")}>
      {list?.map((i) => {
        return (
          <li
            key={i}
            className={clsx(
              "cursor-pointer rounded-full bg-white-opacity-25 hover:bg-white-opacity",
              "sm:w-[10px] sm:h-[10px]",
              "lg:w-[15px] lg:h-[15px]",
              {
                "!bg-white": tabAct === i,
              }
            )}
            onClick={() => onClick && onClick(i)}
          ></li>
        );
      })}
    </ul>
  );
};
export default TabsCircle;
