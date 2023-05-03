import { Flex, Divider } from "@chakra-ui/react";
import React, { useState } from "react";
import withLandingLayout from "./layouts/LandingPageLayout";
import OutclassValetsHeader from "./features/services/OutclassValetsHeader";
import OutclassSubHeader from "./features/services/OutclassSubHeader";
import SilverValet from "./features/services/SilverValet";
import GoldValet from "./features/services/GoldValet";
import PlatValet from "./features/services/PlatValet";
import PicturesHeader from "./features/services/PicturesHeader";
import ServicesPictures from "./features/services/ServicesPictures";

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
      <Flex justify={"center"} gap={6} align={"flex-start"} padding={4}>
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
