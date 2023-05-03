import { Flex, Select, Text } from "@chakra-ui/react";
import React from "react";

const OutclassSubHeader = ({
  currentPlanType,
  handleSelectChange,
}: {
  currentPlanType: any;
  handleSelectChange: any;
}) => {
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
      <Select
        cursor={"pointer"}
        textColor={"white"}
        fontWeight={"bold"}
        letterSpacing={"2px"}
        width="fit-content"
        iconColor={"white"}
        fontSize={"xs"}
        value={currentPlanType}
        onChange={handleSelectChange}
      >
        <option
          value={"INTERIOR"}
          style={{ color: "black", cursor: "pointer" }}
        >
          INTERIOR
        </option>
        <option
          value={"EXTERIOR"}
          style={{ color: "black", cursor: "pointer" }}
        >
          EXTERIOR
        </option>
      </Select>
    </Flex>
  );
};

export default OutclassSubHeader;
