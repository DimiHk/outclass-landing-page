import { Flex, Divider, Text } from "@chakra-ui/react";
import { faCheckCircle } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";
import useLocal from "../../hooks/useLocal";

const VicePresidenteSubscription = () => {
  const { translations } = useLocal();

  return (
    <Flex
      direction={"column"}
      cursor={"pointer"}
      backgroundColor={"whiteAlpha.50"}
      _hover={{ backgroundColor: "whiteAlpha.100" }}
      padding={2}
      paddingRight={6}
      paddingLeft={6}
      borderRadius={"base"}
      height={"full"}
      boxShadow={"rgba(56, 178, 172, 0.15)  0px 5px 30px"}
      gap={2}
    >
      <Flex
        justify={"space-between"}
        padding={2}
        direction={"column"}
        align={"center"}
        gap={2}
      >
        <Text
          textAlign={"center"}
          fontSize={"lg"}
          letterSpacing={"2px"}
          textColor={"white"}
          fontWeight={"light"}
        >
          {translations.vicePresidente}
        </Text>

        <Text
          textAlign={"center"}
          fontSize={"small"}
          letterSpacing={"2px"}
          textColor={"green.300"}
          fontWeight={"bold"}
        >
          {translations.vicePresidenteSubtitle}
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
              {translations.vipBronzeValetText}
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
              {translations.vipViceSilverValetText}
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
              {translations.vipMotText}
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

export default VicePresidenteSubscription;
