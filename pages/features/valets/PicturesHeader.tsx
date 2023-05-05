import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const PicturesHeader = () => {
  return (
    <React.Fragment>
      <Text
        textAlign={"center"}
        fontSize={"xl"}
        letterSpacing={"2px"}
        textColor={"white"}
        fontWeight={"bold"}
        fontStyle={"italic"}
      >
        SERVICES PICTURES
      </Text>
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
          <span style={{ color: "#68D391" }}>{"CHECK "} </span> OUT
          <span style={{ color: "#68D391" }}>{" SOME "} </span> OF THE
          <span style={{ color: "#68D391" }}>{" AMAZING "}</span>
          WORK DONE BY OUR
          <span style={{ color: "#68D391" }}>{" TEAM "}</span>!
        </Text>
      </Flex>
    </React.Fragment>
  );
};

export default PicturesHeader;
