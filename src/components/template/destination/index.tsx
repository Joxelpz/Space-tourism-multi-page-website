import { useState } from "react";
import clsx from "clsx";
import Text from "../../atoms/text";
import Tab from "../../atoms/tab";
import NumberTitle from "../../atoms/number-title";
import Image from "../../atoms/image";
import Separator from "../../atoms/separator";
import TitleText from "../../atoms/title-text";
import data from "../../../data/data.json";
import { DATA_DESTINATION } from "../../../data/data-tabs";

const Destination = () => {
  const [tabActDestinations, setTabActDestinations] = useState(0);
  return (
    <div
      className={clsx(
        "sm:mt-[24px] sm:px-[24px] sm:pb-[58px]",
        "md:mt-[40px] md:px-[39px] md:pb-[62px]",
        "lg:mt-[76px] lg:px-[165px] lg:pb-[112px]"
      )}
    >
      <NumberTitle
        className={clsx(
          "flex items-center gap-[28px]",
          "sm:mb-[32px] sm:justify-center",
          "md:mb-[57px] md:justify-normal",
          "lg:mb-[64px]"
        )}
        number="01"
        title="Pick your destination"
      />
      {data.destinations[tabActDestinations] && (
        <div
          className={clsx(
            "flex",
            "sm:flex-col sm:items-center sm:gap-[26px]",
            "md:flex-col md:items-center md:pl-[58px] md:gap-[56px]",
            "lg:flex-row lg:justify-between lg:items-center"
          )}
        >
          <Image
            className={clsx(
              "sm:w-[170px] sm:h-[170px]",
              "md:w-[300px] md:h-[300px]",
              "lg:w-[445px] lg:h-[445px]"
            )}
            src={data.destinations[tabActDestinations].images.png}
          />
          <div className="w-full lg:max-w-[445px] sm:text-center md:text-center lg:text-left">
            <Tab
              list={DATA_DESTINATION}
              onClick={(i) => setTabActDestinations(i)}
              tabAct={tabActDestinations}
              className="gap-[35px] sm:w-fit sm:mx-auto md:w-fit md:mx-auto lg:mx-0"
              classNameLi={clsx("sm:pb-[8px]")}
            />
            <TitleText
              subtitle={{ label: "" }}
              title={{
                label: data.destinations[tabActDestinations].name,
                className:
                  "sm:text-heading-1/2 md:text-heading-1 lg:text-heading-1 text-white mt-[37px] mb-[14px]",
              }}
              text={{
                text: data.destinations[tabActDestinations].description,
                className: "text-paragraf",
              }}
            />
            <Separator
              className={clsx(
                "sm:mt-[32px] sm:mb-[32px]",
                "md:mt-[49px] md:mb-[28px]",
                "lg:mt-[54px] lg:mb-[28px]"
              )}
            />
            <div
              className={clsx(
                "flex",
                "sm:justify-center sm:flex-col sm:gap-[32px]",
                "md:flex-row md:justify-center md:gap-[11px]",
                "lg:justify-normal lg:gap-[79px]"
              )}
            >
              {[1, 2].map((item) => (
                <div className="flex flex-col gap-3" key={item}>
                  <Text
                    className="uppercase text-subheading-2 text-secondary"
                    text={item === 1 ? "AVG. DISTANCE" : "Est. travel time"}
                  />
                  <Text
                    className="uppercase text-subheading-1"
                    text={
                      item === 1
                        ? data.destinations[tabActDestinations].distance
                        : data.destinations[tabActDestinations].travel
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Destination;
