import clsx from "clsx";

type Props = {
  list?: number[];
  className?: string;
  tabAct?: number;
  onClick?(i: number): void;
};

const TabsNumber = ({ list, className, tabAct, onClick }: Props) => {
  return (
    <ul className={clsx(className, "flex")}>
      {list?.map((item, i) => {
        return (
          <li
            key={i}
            className={clsx(
              "grid place-content-center font-bellefair cursor-pointer rounded-full text-white border-[1px] border-white-opacity-25 hover:border-[1px] hover:border-solid hover:border-white-opacity ",
              "sm:w-[40px] sm:h-[40px] sm:text-heading-8",
              "md:w-[60px] md:h-[60px] md:text-heading-6",
              "lg:w-20 lg:h-20 lg:text-heading-4",
              {
                "border-[1px]  border-solid !border-white bg-white !text-primary":
                  tabAct === i,
              }
            )}
            onClick={() => onClick && onClick(i)}
          >
            <div className="">{item}</div>
          </li>
        );
      })}
    </ul>
  );
};
export default TabsNumber;
