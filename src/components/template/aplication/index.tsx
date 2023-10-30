import { useState } from "react";
import clsx from "clsx";
import Menu from "../../molecules/menu";
import Home from "../../template/home";
import Destination from "../../template/destination";
import Tecnhology from "../../template/tecnhology";
import Crew from "../../template/crew";
import { DATA_APLICATION } from "../../../data/data-tabs";

const backgrounds = [
  "sm:bg-home-sm md:bg-home-md lg:bg-home-lg",
  "sm:bg-destination-sm md:bg-destination-md lg:bg-destination-lg",
  "sm:bg-crew-sm md:bg-crew-md lg:bg-crew-lg",
  "sm:bg-technology-sm md:bg-technology-md lg:bg-technology-lg",
];

const Aplication = () => {
  const [tabAct, setTabAct] = useState(0);
  const selectedBackground =
    tabAct >= 0 && tabAct <= 3 ? backgrounds[tabAct] : "";
  return (
    <div
      className={clsx(
        "bg-cover bg-center min-h-screen relative",
        selectedBackground
      )}
    >
      <Menu
        className="pt-10"
        list={DATA_APLICATION}
        onClick={(i) => setTabAct(i)}
        tabAct={tabAct}
      />
      {tabAct === 0 ? (
        <Home onclick={() => setTabAct(1)} />
      ) : tabAct === 1 ? (
        <Destination />
      ) : tabAct === 2 ? (
        <Crew />
      ) : tabAct === 3 ? (
        <Tecnhology />
      ) : (
        ""
      )}
    </div>
  );
};

export default Aplication;
