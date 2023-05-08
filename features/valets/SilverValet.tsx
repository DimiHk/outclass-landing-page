import { Flex, Divider, Badge, Text } from "@chakra-ui/react";
import {
  faCheckCircle,
  faCircleXmark,
} from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";
import useLocal from "../../hooks/useLocal";

const SilverValet = () => {
  const { translations } = useLocal();

  return (
    <Flex
      width={"full"}
      height={"full"}
      direction={"column"}
      cursor={"pointer"}
      backgroundColor={"whiteAlpha.50"}
      _hover={{ backgroundColor: "whiteAlpha.100" }}
      padding={2}
      paddingRight={6}
      paddingLeft={6}
      boxShadow={"rgba(203, 213, 224, 0.10)   0px 5px 30px"}
      borderRadius={"base"}
      gap={2}
    >
      <Flex justify={"space-between"} padding={2} align={"center"}>
        <Text
          textAlign={"center"}
          fontSize={{ base: "md", md: "lg" }}
          letterSpacing={"2px"}
          textColor={"white"}
          fontWeight={"light"}
        >
          SILVER VALET
        </Text>

        <Text
          textAlign={"center"}
          fontSize={{ base: "xs", md: "md" }}
          letterSpacing={"2px"}
          textColor={"green.300"}
          fontWeight={"bold"}
        >
          110€ / PACK
        </Text>
      </Flex>
      <Divider opacity={"10%"} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Text
          padding={2}
          letterSpacing={"2px"}
          textColor={"white"}
          fontWeight={"semibold"}
          fontSize={"xs"}
        >
          {translations.valetInteriorText}
        </Text>
        <Divider opacity={"10%"} />
        <Flex gap={3.5} padding={4} direction={"column"}>
          <Flex gap={2}>
            <Text
              letterSpacing={"2px"}
              textColor={"white"}
              fontWeight={"light"}
              fontSize={"2xs"}
            >
              {translations.meticulousVaccumText}
            </Text>
            <FontAwesomeIcon
              opacity={"85%"}
              icon={faCheckCircle}
              color={"lightGreen"}
            />
          </Flex>
          <Divider opacity={"10%"} />
          <Flex gap={2}>
            <Text
              letterSpacing={"2px"}
              textColor={"white"}
              fontWeight={"light"}
              fontSize={"2xs"}
            >
              {translations.compressedAirText}
            </Text>
            <FontAwesomeIcon
              opacity={"85%"}
              icon={faCheckCircle}
              color={"lightGreen"}
            />
          </Flex>

          <Divider opacity={"10%"} />
          <Flex gap={2}>
            <Text
              letterSpacing={"2px"}
              textColor={"white"}
              fontWeight={"light"}
              fontSize={"2xs"}
            >
              {translations.washedUpholsteryText}
            </Text>
            <FontAwesomeIcon
              opacity={"85%"}
              icon={faCircleXmark}
              color={"danger"}
              style={{ color: "#F56565" }}
            />
          </Flex>
          <Divider opacity={"10%"} />
          <Flex gap={2}>
            <Text
              letterSpacing={"2px"}
              textColor={"white"}
              fontWeight={"light"}
              fontSize={"2xs"}
            >
              {translations.cleanCarpetText}
            </Text>
            <FontAwesomeIcon
              opacity={"85%"}
              icon={faCheckCircle}
              color={"lightGreen"}
            />
          </Flex>
          <Divider opacity={"10%"} />
          <Flex gap={2}>
            <Text
              letterSpacing={"2px"}
              textColor={"white"}
              fontWeight={"light"}
              fontSize={"2xs"}
            >
              {translations.cleanInteriorCopartimentText}
            </Text>
            <FontAwesomeIcon
              opacity={"85%"}
              icon={faCheckCircle}
              color={"lightGreen"}
            />
          </Flex>
          <Divider opacity={"10%"} />
          <Flex gap={2}>
            <Text
              letterSpacing={"2px"}
              textColor={"white"}
              fontWeight={"light"}
              fontSize={"2xs"}
            >
              {translations.airFreshenerText}
            </Text>
            <FontAwesomeIcon
              opacity={"85%"}
              icon={faCheckCircle}
              color={"lightGreen"}
            />
          </Flex>

          <Divider opacity={"10%"} />
          <Flex gap={2}>
            <Text
              letterSpacing={"2px"}
              textColor={"white"}
              fontWeight={"light"}
              fontSize={"2xs"}
            >
              {translations.completeHygienizationText}
            </Text>
            <FontAwesomeIcon
              opacity={"85%"}
              icon={faCircleXmark}
              color={"danger"}
              style={{ color: "#F56565" }}
            />
          </Flex>
        </Flex>

        <Text
          padding={2}
          letterSpacing={"2px"}
          textColor={"white"}
          fontWeight={"semibold"}
          fontSize={"xs"}
        >
          {translations.valetExteriorText}
        </Text>
        <Divider opacity={"10%"} />

        <Flex gap={3.5} padding={4} direction={"column"}>
          <Flex gap={2}>
            <Text
              letterSpacing={"2px"}
              textColor={"white"}
              fontWeight={"light"}
              fontSize={"2xs"}
            >
              {
                <Badge
                  letterSpacing={"2px"}
                  fontWeight={"light"}
                  colorScheme={"green"}
                  textAlign={"center"}
                >
                  {translations.fiveStep}
                </Badge>
              }
              {translations.wash}
            </Text>
            <FontAwesomeIcon
              opacity={"85%"}
              icon={faCheckCircle}
              color={"lightGreen"}
            />
          </Flex>
          <Divider opacity={"10%"} />
          <Flex gap={2}>
            <Text
              letterSpacing={"2px"}
              textColor={"white"}
              fontWeight={"light"}
              fontSize={"2xs"}
            >
              {translations.detailedAlloys}
            </Text>
            <FontAwesomeIcon
              opacity={"85%"}
              icon={faCheckCircle}
              color={"lightGreen"}
            />
          </Flex>

          <Divider opacity={"10%"} />
          <Flex gap={2}>
            <Text
              letterSpacing={"2px"}
              textColor={"white"}
              fontWeight={"light"}
              fontSize={"2xs"}
            >
              {translations.whellArm}
            </Text>
            <FontAwesomeIcon
              opacity={"85%"}
              icon={faCheckCircle}
              color={"lightGreen"}
            />
          </Flex>
          <Divider opacity={"10%"} />
          <Flex gap={2}>
            <Text
              letterSpacing={"2px"}
              textColor={"white"}
              fontWeight={"light"}
              fontSize={"2xs"}
            >
              {translations.detailedBrushUsage}
            </Text>
            <FontAwesomeIcon
              opacity={"85%"}
              icon={faCheckCircle}
              color={"lightGreen"}
            />
          </Flex>
          <Divider opacity={"10%"} />
          <Flex gap={2}>
            <Text
              letterSpacing={"2px"}
              textColor={"white"}
              fontWeight={"light"}
              fontSize={"2xs"}
            >
              {translations.towelDried}
            </Text>
            <FontAwesomeIcon
              opacity={"85%"}
              icon={faCheckCircle}
              color={"lightGreen"}
            />
          </Flex>
          <Divider opacity={"10%"} />
          <Flex gap={2}>
            <Text
              letterSpacing={"2px"}
              textColor={"white"}
              fontWeight={"light"}
              fontSize={"2xs"}
            >
              {translations.tireAndPlasticDressing}
            </Text>
            <FontAwesomeIcon
              opacity={"85%"}
              icon={faCheckCircle}
              color={"lightGreen"}
            />
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
};

export default SilverValet;
