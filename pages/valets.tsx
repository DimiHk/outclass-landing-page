import { Flex, Divider } from "@chakra-ui/react";
import React, { useState } from "react";
import withLandingLayout from "./layouts/LandingPageLayout";
import OutclassValetsHeader from "./features/valets/OutclassValetsHeader";
import OutclassSubHeader from "./features/valets/OutclassSubHeader";
import SilverValet from "./features/valets/SilverValet";
import GoldValet from "./features/valets/GoldValet";
import PlatValet from "./features/valets/PlatValet";
import PicturesHeader from "./features/valets/PicturesHeader";
import ServicesPictures from "./features/valets/ServicesPictures";

const Services = () => {
  const [currentPlanType, setcurrentPlanType] = useState<string>("INTERIOR");

  const handleSelectChange = (event) => {
    setcurrentPlanType(event.target.value);
  };

  return (
    <React.Fragment>
      <Flex direction={"column"} padding={"0.5rem"}>
        <OutclassValetsHeader />
        <OutclassSubHeader
          currentPlanType={currentPlanType}
          handleSelectChange={handleSelectChange}
        />
      </Flex>
      <Flex justify={"center"} gap={12} align={"flex-start"} padding={4}>
        <SilverValet currentPlanType={currentPlanType} />
        <GoldValet currentPlanType={currentPlanType} />
        <PlatValet currentPlanType={currentPlanType} />
      </Flex>
      <Divider opacity={"10%"} />
      <Flex
        direction={"column"}
        width={"full"}
        justify={"center"}
        padding={"1rem"}
        gap={6}
      >
        <Flex direction={"column"} padding={"0.5rem"}>
          <PicturesHeader />
          <ServicesPictures />
        </Flex>
      </Flex>
    </React.Fragment>
  );
};

export default withLandingLayout(Services);
