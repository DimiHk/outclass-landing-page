import { Flex, Divider, Text, Center } from "@chakra-ui/react";
import { faCheckCircle } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";
import useLocal from "../../hooks/useLocal";

const PlatValet = () => {
  const { translations } = useLocal();

  return (
    <Flex
      width={"full"}
      height={"full"}
      position={"relative"}
      direction={"column"}
      cursor={"pointer"}
      backgroundColor={"whiteAlpha.50"}
      _hover={{ backgroundColor: "whiteAlpha.100" }}
      padding={2}
      paddingRight={6}
      paddingLeft={6}
      boxShadow={"rgba(11, 197, 234, 0.10)   0px 5px 30px"}
      borderRadius={"base"}
      gap={2}
    >
      <Center>
        <Text
          position={"absolute"}
          borderRadius={"base"}
          top={-4}
          backgroundColor={"cyan.100"}
          paddingRight={"12px"}
          paddingLeft={"12px"}
          paddingTop={"6px"}
          paddingBottom={"6px"}
          letterSpacing={"2px"}
          fontSize={"2xs"}
          textColor={"cyan.800"}
          fontWeight={"light"}
          boxShadow={"rgba(56, 178, 172, 0.15)  0px 5px 30px"}
        >
          {translations.topTierValet}
        </Text>
      </Center>
      <Flex justify={"space-between"} padding={2} align={"center"}>
        <Text
          textAlign={"center"}
          fontSize={{ base: "md", md: "lg" }}
          letterSpacing={"2px"}
          textColor={"white"}
          fontWeight={"light"}
        >
          PLAT VALET
        </Text>
        <Text
          textAlign={"center"}
          fontSize={{ base: "xs", md: "md" }}
          letterSpacing={"2px"}
          textColor={"green.300"}
          fontWeight={"bold"}
        >
          650€ / PACK
        </Text>
      </Flex>
      <Divider opacity={"10%"} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Flex gap={3.5} padding={4} direction={"column"}>
          <Flex gap={2}>
            <Text
              letterSpacing={"2px"}
              textColor={"white"}
              fontWeight={"light"}
              fontSize={"2xs"}
            >
              {translations.vipViceGoldValetText}
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
              {translations.technicalPolishmentText}
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
              {translations.paintProtectionText}
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
              {translations.ceramicCoatingAlloysText}
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
              {translations.waterproofFabricText}
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
              {translations.leatherProtectionText}
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

export default PlatValet;
