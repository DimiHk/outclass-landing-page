import { Flex, Highlight, Text } from "@chakra-ui/react";
import React from "react";
import useLocal from "../../hooks/useLocal";

const VipHeader = () => {
  const { translations } = useLocal();

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
        {translations.vipTitle}
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
          <Highlight
            query={[
              "JOIN",
              "ENJOY",
              "LUXURY",
              "SERVICE",
              "JUNTE-SE",
              "VIP",
              "SERVIÇO",
              "DETALHE",
              "LUXO",
              "ÚNETE",
              "SERVICIO",
              "LUJO",
            ]}
            styles={{ textColor: "green.300" }}
          >
            {translations.vipSubtitleText}
          </Highlight>
        </Text>
      </Flex>
    </Flex>
  );
};

export default VipHeader;
