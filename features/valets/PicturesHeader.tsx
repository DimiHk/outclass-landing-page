import React from "react";
import { Flex, Highlight, Text } from "@chakra-ui/react";
import useLocal from "../../hooks/useLocal";

const PicturesHeader = () => {
  const { translations } = useLocal();

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
        {translations.valetsPicturesTitle}
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
              "CHECK",
              "SOME",
              "AMAZING",
              "TEAM",
              "CONFIRA",
              "TRABALHOS",
              "REALIZADOS",
              "EQUIPA",
              "EQUIPO",
              "INCREÍBLES",
              "VISTAZO",
            ]}
            styles={{ textColor: "green.300" }}
          >
            {translations.valetsPicturesText}
          </Highlight>
        </Text>
      </Flex>
    </React.Fragment>
  );
};

export default PicturesHeader;
