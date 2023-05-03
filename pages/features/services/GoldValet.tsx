import { Flex, Divider, Badge, Text } from "@chakra-ui/react";
import { faCheckCircle } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";

const GoldValet = ({ currentPlanType }: { currentPlanType: any }) => {
  return (
    <Flex
      position={"relative"}
      minWidth={"md"}
      direction={"column"}
      cursor={"pointer"}
      backgroundColor={"whiteAlpha.200"}
      _hover={{ backgroundColor: "whiteAlpha.100" }}
      padding={2}
      paddingRight={6}
      paddingLeft={6}
      shadow={"dark-lg"}
      borderRadius={"base"}
      gap={2}
    >
      <Text
        position={"absolute"}
        borderRadius={"base"}
        top={-4}
        right={145}
        backgroundColor={"green.100"}
        paddingRight={"12px"}
        paddingLeft={"12px"}
        paddingTop={"6px"}
        paddingBottom={"6px"}
        letterSpacing={"2px"}
        fontSize={"2xs"}
        textColor={"green.800"}
        fontWeight={"semibold"}
        shadow={"dark-lg"}
      >
        MOST SELLED VALET
      </Text>

      <Flex justify={"space-between"} padding={2} align={"center"}>
        <Text
          textAlign={"center"}
          fontSize={"lg"}
          letterSpacing={"2px"}
          textColor={"white"}
          fontWeight={"light"}
        >
          GOLD VALET
        </Text>

        <Text
          textAlign={"center"}
          fontSize={"md"}
          letterSpacing={"2px"}
          textColor={"green.300"}
          fontWeight={"bold"}
        >
          300€ / PACK
        </Text>
      </Flex>
      <Divider opacity={"10%"} />
      <motion.div
        key={currentPlanType}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        {currentPlanType === "INTERIOR" ? (
          <Flex gap={3.5} padding={4} direction={"column"}>
            <Flex gap={2}>
              <Text
                letterSpacing={"2px"}
                textColor={"white"}
                fontWeight={"light"}
                fontSize={"2xs"}
              >
                METICULOS VACUUM
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
                COMPRESSED AIR TECHNIQUE
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
                WASHED UPHOLSTERY
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
                CLEAN CARPET
              </Text>
              <FontAwesomeIcon
                opacity={"85%"}
                icon={faCheckCircle}
                color={"lightGreen"}
              />
            </Flex>
            <Divider opacity={"10%"} />
            <Flex gap={4} justify={"space-between"} align={"center"}>
              <Text
                letterSpacing={"2px"}
                textColor={"white"}
                fontWeight={"light"}
                fontSize={"2xs"}
              >
                CLEAN INTERIOR COPARTIMENT & CONDITIONED
              </Text>
              <Badge colorScheme="green">DEEP CLEAN</Badge>
            </Flex>
            <Divider opacity={"10%"} />
            <Flex gap={2}>
              <Text
                letterSpacing={"2px"}
                textColor={"white"}
                fontWeight={"light"}
                fontSize={"2xs"}
              >
                AIR FRESHENER
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
                COMPLETE HYGIENIZATION - INTERIOR CONDITIONING
              </Text>
              <FontAwesomeIcon
                opacity={"85%"}
                icon={faCheckCircle}
                color={"lightGreen"}
              />
            </Flex>
          </Flex>
        ) : (
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
                    7 STEP
                  </Badge>
                }
                {" WASH"}
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
                DETAILED ALLOYS AND TABS
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
                DETAILED DOORS AND FOOTSTEPS
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
                DETAILED BRUSH USAGE FOR DIFFICULT ACCESS AREAS
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
                TOWEL DRIED
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
                TIRE & PLASTIC - DRESSING
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
                DETAILED ENGINE BAY
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
                POLISHED EXHAUST TIPS
              </Text>
              <FontAwesomeIcon
                opacity={"85%"}
                icon={faCheckCircle}
                color={"lightGreen"}
              />
            </Flex>
          </Flex>
        )}
      </motion.div>
    </Flex>
  );
};

export default GoldValet;
