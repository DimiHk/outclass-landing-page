import { Button, Flex, Text } from "@chakra-ui/react";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAt, faLocationDot } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const OutclassInfoHeader = () => {
  return (
    <Flex
      padding={{ base: 4, xl: 2 }}
      position={"relative"}
      bottom={0}
      wrap={{ base: "wrap", lg: undefined }}
      backgroundColor={"blackAlpha.500"}
      align={"center"}
      justify={"center"}
      gap={{ base: 4, xl: 12 }}
      shadow={"md"}
      direction={"row"}
    >
      <Flex align={"center"} justify={"center"} gap={2.5}>
        <FontAwesomeIcon icon={faWhatsapp} color="white" size="lg" />
        <Text letterSpacing={"2px"} textColor={"white"} fontSize={"xs"}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`tel:(+351) 962 199 831`}
          >
            (+351) 962 199 831
          </a>
        </Text>
      </Flex>
      <Flex align={"center"} justify={"center"} gap={2.5}>
        <FontAwesomeIcon icon={faWhatsapp} color="white" size="lg" />
        <Text letterSpacing={"2px"} textColor={"white"} fontSize={"xs"}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`tel:(+351) 939 235 577`}
          >
            (+351) 939 235 577
          </a>
        </Text>
      </Flex>
      <Flex align={"center"} justify={"center"} gap={2.5}>
        <FontAwesomeIcon icon={faInstagram} color="white" size="lg" />
        <Text letterSpacing={"2px"} textColor={"white"} fontSize={"xs"}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/outclasscardetail/"
          >
            @outclasscardetail
          </a>
        </Text>
      </Flex>

      <Flex align={"center"} justify={"center"} gap={2.5}>
        <FontAwesomeIcon icon={faAt} color="white" size="sm" />
        <Text letterSpacing={"2px"} textColor={"white"} fontSize={"xs"}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`mailto:geral@outclasscardetail.com`}
          >
            geral@outclasscardetail.com
          </a>
        </Text>
      </Flex>

      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://goo.gl/maps/VaymPpbM3MLp7T4b9?coh=178572&entry=tt"
      >
        <Button
          textColor={"gray.900"}
          backgroundColor={"whiteAlpha.500"}
          size={"sm"}
          fontWeight={"light"}
          color={"white"}
          _hover={{
            backgroundColor: "whiteAlpha.100",
          }}
        >
          <Flex align={"center"} justify={"center"} gap={2}>
            <Text letterSpacing={"2px"} fontSize={"2xs"}>
              WHERE TO FIND US
            </Text>
            <FontAwesomeIcon size="sm" icon={faLocationDot} />
          </Flex>
        </Button>
      </Link>
    </Flex>
  );
};

export default OutclassInfoHeader;
