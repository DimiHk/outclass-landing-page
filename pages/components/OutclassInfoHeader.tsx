import { Button, Flex, Text } from "@chakra-ui/react";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAt, faLocationDot } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OutclassInfoHeader = () => {
  return (
    <Flex
        padding={3}
        position={"relative"}
        backgroundColor={"blackAlpha.500"}
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
            <a href={`tel:(+351) 939 235 577`}>(+351) 962 199 831</a>
          </Text>
        </Flex>
        {/* <Flex align={"center"} justify={"center"} gap={2}>
          <FontAwesomeIcon icon={faWhatsapp} color="white" size="xl" />
          <Text
            letterSpacing={"2px"}
            textColor={"white"}
            fontWeight={"light"}
            fontSize={"xs"}
          >
            (+351) 939 235 577
          </Text>
        </Flex> */}
        <Flex align={"center"} justify={"center"} gap={2}>
          <FontAwesomeIcon icon={faInstagram} color="white" size="lg" />
          <Text
            letterSpacing={"2px"}
            textColor={"white"}
            fontWeight={"light"}
            fontSize={"xs"}
          >
            <a href="https://www.instagram.com/outclasscardetail/">@outclasscardetail</a>
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
            <a href={`mailto:geral@outclasscardetail.com`}>geral@outclasscardetail.com</a>
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
            <Text letterSpacing={"2px"} fontWeight={"light"} fontSize={"xs"}>
              <a href="https://goo.gl/maps/VaymPpbM3MLp7T4b9?coh=178572&entry=tt">WHERE TO FIND US <FontAwesomeIcon icon={faLocationDot} /></a> 
            </Text>
          </Button>
        </Flex>
      </Flex>
  );
};

export default OutclassInfoHeader;
