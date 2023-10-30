import clsx from "clsx";
import TabsCircle from "../../atoms/tabs-circle";
import NumberTitle from "../../atoms/number-title";
import TitleText from "../../atoms/title-text";
import Image from "../../atoms/image";
import data from "../../../data/data.json";
import { DATA_CREW } from "../../../data/data-tabs";
import useTabSwitcher from "hooks/useTabSwitcher";

const Crew = () => {
  const { tabActCrew, setTabActCrew } = useTabSwitcher(DATA_CREW);

  return (
    <div className="sm:mt-[24px] sm:mx-6 md:mx-[38px] md:mt-[40px] lg:ml-[166px] lg:mr-0 lg:mt-[76px]">
      <div className="relative flex sm:flex-col-reverse sm:gap-8 md:flex-col md:gap-[50px] lg:flex-row lg:gap-0 lg:justify-between ">
        <NumberTitle
          className={clsx(
            "flex items-center gap-[28px] absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 md:translate-x-0 sm:top-0 md:top-0 md:left-0",
            "sm:mb-[32px] sm:justify-center",
            "md:mb-[57px] md:justify-normal",
            "lg:mb-[154px]"
          )}
          number="02"
          title="Meet your crew"
        />
        <div className="sm:flex sm:flex-col-reverse sm:gap-[32px] sm:text-center sm:mx-auto md:gap-0 md:flex-col md:pt-[87px] md:text-center md:mx-auto lg:pt-[184px] lg:text-left lg:mx-0 lg:pb-[94px]">
          <TitleText
            subtitle={{
              label: data.crew[tabActCrew].role,
              className:
                "uppercase font-bellefair sm:text-heading-8 md:text-heading-6 lg:text-heading-4 text-white-opacity",
            }}
            title={{
              label: data.crew[tabActCrew].name,
              className:
                "text-white uppercase sm:text-heading-6 md:text-heading-40 lg:text-heading-3 lg:mt-[15px] lg:mb-[27px] sm:mt-[8px] sm:mb-[16px]",
            }}
            text={{
              text: data.crew[tabActCrew].bio,
              className: "text-paragraf max-w-[530px] sm:mx-auto lg:mx-0",
            }}
          />
          <TabsCircle
            className="sm:mx-auto md:mt-10 md:mx-auto md:w-fit lg:mt-[120px] lg:mx-0"
            list={DATA_CREW}
            onClick={(i) => setTabActCrew(i)}
            tabAct={tabActCrew}
          />
        </div>
        <div
          className={clsx(
            "sm:w-full sm:h-[223px] sm:mx-auto sm:border-b-[3px]  sm:border-solid sm:border-[#383B4B] sm:mt-[51px] sm:flex sm:justify-center",
            "md:w-auto sm:mx-0 md:border-b-[3px] md:border-solid md:border-transparent md:h-[530px]",
            "lg:w-auto lg:h-auto lg:flex lg:items-end"
          )}
        >
          <Image
            className={clsx(
              "sm:object-contain sm:w-auto sm:h-auto",
              "lg:w-auto lg:h-auto "
            )}
            src={data.crew[tabActCrew].images.png}
          />
        </div>
      </div>
    </div>
  );
};
export default Crew;
