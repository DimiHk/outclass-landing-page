import { Flex, Highlight, Text } from "@chakra-ui/react";
import React from "react";
import useLocal from "../../hooks/useLocal";

const OutclassSubHeader = () => {
  const { translations } = useLocal();

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
        <Highlight
          query={[
            "DISCOVER",
            "SPECIALIZED",
            "VALETING",
            "PACOTES",
            "DESCUBRA",
            "SERVIÇOS",
            "PAQUETES",
            "DESCUBRE",
          ]}
          styles={{ textColor: "green.300" }}
        >
          {translations.discoverDetailingValetsText}
        </Highlight>
      </Text>
    </Flex>
  );
};

export default OutclassSubHeader;
