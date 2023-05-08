import React from "react";
import { Text } from "@chakra-ui/react";
import useLocal from "../../hooks/useLocal";

const OutclassValetsHeader = () => {
  const { translations } = useLocal();
  return (
    <Text
      textAlign={"center"}
      fontSize={"xl"}
      letterSpacing={"2px"}
      textColor={"white"}
      fontWeight={"bold"}
      fontStyle={"italic"}
    >
      {translations.outclassValetsText}
    </Text>
  );
};

export default OutclassValetsHeader;
