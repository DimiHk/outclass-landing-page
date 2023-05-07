import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const VipHeader = () => {
  return (
    <Flex direction={"column"} gap={2}>
      <Text
        textAlign={"center"}
        fontSize={"xl"}
        letterSpacing={"2px"}
        textColor={"white"}
        fontWeight={"bold"}
        fontStyle={"italic"}
      >
        VIP CLUB SUBSCRIPTIONS
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
          <span style={{ color: "#68D391" }}>{"JOIN "} </span> OUR VIP
          MEMBERSHIP &<span style={{ color: "#68D391" }}>{" ENJOY "} </span>
          THE ULTIMATE
          <span style={{ color: "#68D391" }}>{" LUXURY "}</span> CAR DETAILING
          <span style={{ color: "#68D391" }}>{" SERVICE "} </span>
        </Text>
      </Flex>
    </Flex>
  );
};

export default VipHeader;
