import clsx from "clsx";

type Tabs = {
  numeration?: string;
  title?: string;
};

type Props = {
  list?: Tabs[];
  className?: string;
  classNameLi?: string;
  nav?: boolean;
  tabAct?: number;
  onClick?(i: number): void;
};

const Tab = ({ list, className, classNameLi, nav, tabAct, onClick }: Props) => {
  return (
    <ul className={clsx(className, "flex items-center ")}>
      {list?.map((item, i) => {
        return (
          <li
            key={i}
            className={clsx(
              classNameLi,
              "flex items-center gap-[11px] w-fit  lg:text-nav md:text-subheading-2 font-barlow uppercase cursor-pointer text-white md:border-b-[3px] md:border-transparent md:hover:border-b-[3px] md:hover:border-solid md:hover:border-white-opacity md:pb-[15px]",
              {
                "md:border-b-[3px]  md:border-solid md:!border-white":
                  tabAct === i,
              },
              { "md:!py-[38px]": nav }
            )}
            onClick={() => onClick && onClick(i)}
          >
            {item.numeration && (
              <div className="font-bold sm:inline md:hidden lg:inline">
                {item.numeration}
              </div>
            )}
            <div className="">{item.title}</div>
          </li>
        );
      })}
    </ul>
  );
};
export default Tab;
