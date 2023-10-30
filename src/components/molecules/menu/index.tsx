import clsx from "clsx";
import { useState } from "react";
import Isotipo from "../../atoms/isotipo";
import Tab from "../../atoms/tab";
import { Hamburguer } from "icons/hamburguer";
import { Close } from "icons/close";

type Tabs = {
  numeration?: string;
  title?: string;
};

type Props = {
  className?: string;
  list?: Tabs[];
  tabAct?: number;
  onClick?(i: number): void;
};

const Menu = ({ className, list, tabAct, onClick }: Props) => {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <div
      className={clsx(
        className,
        "w-full flex items-center justify-between gap-[64px] sm:px-[24px] md:pl-[39px] md:pr-0 lg:pl-[55px] lg:pr-0"
      )}
    >
      <Isotipo />
      <div className="sm:hidden md:flex items-center lg:w-full">
        <span className="h-[1px] w-full bg-white-opacity-25 -mr-[30px] relative z-10 hidden lg:inline" />
        <div className="backdrop-blur-[40.774227142333984px] md:px-[48px] lg:pl-[123px] lg:pr-[167px] w-fit">
          <Tab
            className="md:gap-[37px] lg:gap-[50px]"
            list={list}
            onClick={onClick}
            tabAct={tabAct}
            nav
          />
        </div>
      </div>
      <div className="md:hidden" onClick={() => setActiveMenu(true)}>
        <Hamburguer />
      </div>
      {activeMenu && (
        <div className="absolute p-8 top-0 right-0 w-[70%] h-screen backdrop-blur-[40.774227142333984px] z-10">
          <div className="flex justify-end">
            <div
              onClick={() => setActiveMenu(false)}
              className="cursor-pointer"
            >
              <Close />
            </div>
          </div>
          <Tab
            className="sm:flex-col sm:gap-8 sm:mt-[65px] sm:items-start"
            list={list}
            onClick={onClick}
            tabAct={tabAct}
            nav
          />
        </div>
      )}
    </div>
  );
};
export default Menu;
