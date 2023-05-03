import { Button, Flex, Text } from "@chakra-ui/react";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAt, faLocationDot } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OutclassInfoHeader = () => {
  return (
    <Flex
      padding={3}
      backgroundColor={"whiteAlpha.1080"}
      align={"center"}
      justify={"center"}
      gap={8}
      shadow={"md"}
    >
      <Flex align={"center"} justify={"center"} gap={2}>
        <FontAwesomeIcon icon={faWhatsapp} color="white" size="xl" />
        <Text
          letterSpacing={"2px"}
          textColor={"white"}
          fontWeight={"light"}
          fontSize={"xs"}
        >
          (+351) 962 199 831
        </Text>
      </Flex>
      <Flex align={"center"} justify={"center"} gap={2}>
        <FontAwesomeIcon icon={faWhatsapp} color="white" size="xl" />
        <Text
          letterSpacing={"2px"}
          textColor={"white"}
          fontWeight={"light"}
          fontSize={"xs"}
        >
          (+351) 939 235 577
        </Text>
      </Flex>

      <Flex align={"center"} justify={"center"} gap={2}>
        <FontAwesomeIcon icon={faInstagram} color="white" size="lg" />
        <Text
          letterSpacing={"2px"}
          textColor={"white"}
          fontWeight={"light"}
          fontSize={"xs"}
        >
          @outclasscardetail
        </Text>
      </Flex>
      <Flex align={"center"} justify={"center"} gap={2}>
        <FontAwesomeIcon icon={faAt} color="white" size="lg" />
        <Text
          letterSpacing={"2px"}
          textColor={"white"}
          fontWeight={"light"}
          fontSize={"xs"}
        >
          geral@outclasscardetail.com
        </Text>
      </Flex>
      <Flex align={"center"} justify={"center"} gap={2}>
        <Button
          textColor={"gray.900"}
          backgroundColor={"whiteAlpha.500"}
          boxShadow={"dark-lg"}
          size={"sm"}
          _hover={{
            backgroundColor: "blackAlpha.500",
            color: "white",
          }}
        >
          <Text letterSpacing={"2px"} fontWeight={"light"} fontSize={"2xs"}>
            WHERE TO FIND US <FontAwesomeIcon icon={faLocationDot} />
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default OutclassInfoHeader;