import { useState } from "react";
import clsx from "clsx";
import NumberTitle from "../../atoms/number-title";
import TabsNumber from "../../atoms/tabs-number";
import Image from "../../atoms/image";
import TitleText from "../../atoms/title-text";
import data from "../../../data/data.json";
import { DATA_TECNHOLOGY } from "../../../data/data-tabs";

const Tecnhology = () => {
  const [tabActTecnhology, setTabActTecnhology] = useState(0);

  return (
    <div
      className={clsx(
        "sm:mt-[24px] sm:pb-[81px]",
        "md:mt-[40px] md:pb-[97px]",
        "lg:mt-[76px] lg:pb-[101px]"
      )}
    >
      <NumberTitle
        className={clsx(
          "flex items-center gap-[28px]",
          "sm:mb-[32px] sm:justify-center",
          "md:mb-[60px] md:px-[39px]  md:justify-normal",
          "lg:mb-[26px] lg:px-[167px]"
        )}
        number="03"
        title="SPACE LAUNCH 101"
      />
      <div
        className={clsx(
          "flex",
          "sm:flex-col sm:justify-between sm:px-0 md:items-center sm:gap-[34px]",
          "md:flex-col md:justify-between md:pl-0 md:items-center md:gap-[56px]",
          "lg:flex-row-reverse lg:justify-between lg:pl-[167px] lg:items-center lg:gap-5"
        )}
      >
        <Image
          className={clsx("sm:inline sm:w-full", "lg:hidden")}
          src={data.technology[tabActTecnhology].images.landscape}
        />
        <Image
          className={clsx("sm:hidden", "lg:inline lg:w-[515px] lg:h-[527px]")}
          src={data.technology[tabActTecnhology].images.portrait}
        />
        <div
          className={clsx(
            "flex",
            "sm:flex-col sm:items-center sm:gap-[26px] sm:px-6",
            "md:flex-col md:items-center md:gap-[44px] md:px-0",
            "lg:flex-row lg:gap-[80px]"
          )}
        >
          <TabsNumber
            className={clsx("sm:gap-4", "lg:flex-col lg:gap-8")}
            list={DATA_TECNHOLOGY}
            onClick={(i) => setTabActTecnhology(i)}
            tabAct={tabActTecnhology}
          />
          <TitleText
            className={clsx(
              "",
              "sm:text-center sm:w-full",
              "md:max-w-[470px]",
              "lg:text-left"
            )}
            subtitle={{
              label: "THE TERMINOLOGY…",
              className: "sm:text-subheading-2 md:text-nav !text-secondary",
            }}
            title={{
              label: data.technology[tabActTecnhology].name,
              className: clsx(
                "text-white uppercase",
                "sm:text-heading-6 sm:mt-[9px] sm:mb-[16px]",
                "md:text-heading-40 md:my-4",
                "lg:text-heading-3 lg:mt-[11px] lg:mb-[17px]"
              ),
            }}
            text={{
              text: data.technology[tabActTecnhology].description,
              className: "text-paragraf !text-secondary",
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Tecnhology;
