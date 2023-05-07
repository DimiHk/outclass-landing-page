import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const OutclassSubHeader = () => {
  return (
    <Flex
      gap={4}
      w={"full"}
      justify={"center"}
      align={"center"}
      padding={"0.275rem"}
    >
      <Text
        textAlign={"center"}
        fontSize={"md"}
        letterSpacing={"2px"}
        fontWeight={"semibold"}
        fontStyle={"italic"}
        textColor={"white"}
      >
        <span style={{ color: "#68D391" }}>{"DISCOVER "} </span>OUR
        <span style={{ color: "#68D391" }}>{" SPECIALIZED "}</span>
        DETAILING
        <span style={{ color: "#68D391" }}>{" VALET "}</span> PACKAGES
      </Text>
    </Flex>
  );
};

export default OutclassSubHeader;
