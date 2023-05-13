import { Center, Flex } from "@chakra-ui/react";
import React from "react";
import withLandingLayout from "../layouts/LandingPageLayout";
import OutclassValetsHeader from "../features/valets/OutclassValetsHeader";
import OutclassSubHeader from "../features/valets/OutclassSubHeader";
import SilverValet from "../features/valets/SilverValet";
import GoldValet from "../features/valets/GoldValet";
import PlatValet from "../features/valets/PlatValet";
import PicturesHeader from "../features/valets/PicturesHeader";
import ServicesPictures from "../features/valets/ServicesPictures";

const Services = () => {
  return (
    <React.Fragment>
      <Flex direction={"column"} padding={"0.5rem"}>
        <OutclassValetsHeader />
        <OutclassSubHeader />
      </Flex>
      <Flex
        direction={{ base: "column", xl: "row" }}
        justify={"center"}
        gap={12}
        align={"flex-start"}
        padding={4}
      >
        <Center width={"full"}>
          <SilverValet />
        </Center>
        <Center width={"full"}>
          <GoldValet />
        </Center>
        <Center width={"full"}>
          <PlatValet />
        </Center>
      </Flex>
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
